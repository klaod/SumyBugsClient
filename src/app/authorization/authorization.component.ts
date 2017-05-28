import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

    private _host:string;
    private _role:string;

    authorized:boolean = false;
    login:string;
    pass:string;
    rolePresentation:string;
    id:number;

    @Output() updateRole = new EventEmitter<string>();

    set role(value) {
        switch(value) {
            case 'moderator':
                this.rolePresentation = "Модератор";
                break;
            case 'official':
                this.rolePresentation = "Чиновник";
                break;
        }
        this._role = value;
    }
    get role() {
        return this._role;
    }    
    constructor() {        
        this._host = 'http://54.164.108.6:3000/users';
        if(this.id == null) {
            this.role = "";
            this.login = "";
            this.pass = "";   
            this.id = -1;
        }                
    }

    public logIn(login, pass) {       
        this.login = login;
        this.pass = pass;            
        this._getUserData().then(data => {            
            if(!!data && data.length > 0) {  
                data = data[0];              
                this.login = data.login;
                this.role = data.role; 
                this.id = data.id;           
                this.authorized = true;

                this.updateRole.emit(this.role);  
                this._saveUserData();      
            }
            else {
                this.authorized = false;
                this.logOut();
            }
        }).catch(e=>{
            this.logOut();
            alert('Something went wrong!');
        });        
    }
    public logOut() {
        this.authorized = false;
        this.role = "";
        this.login = "";
        this.pass = "";
        this.id = -1;

        this.updateRole.emit(this.role);
        this._saveUserData();
    }

    private _saveUserData() {
        localStorage.setItem("user", JSON.stringify({
            login : this.login,
            pass: this.pass
        }));        
    }
    private _getUserData():Promise<any> {        
        return new Promise((resolve, reject) => {
            let params = "?login=" + this.login+"&pass="+this.pass;
            let xmlhttp = new XMLHttpRequest();
            let url = this._host + params;            
            xmlhttp.open('GET', url, true);
            xmlhttp.setRequestHeader('Content-Type', 'application/json');
            xmlhttp.onreadystatechange = ()=>{
                if(xmlhttp.status == 200 && xmlhttp.readyState == 4) {                            
                    resolve(JSON.parse(xmlhttp.responseText));
                }
            }
            xmlhttp.send();
        })        
    }

    public ngOnInit() {
        let saved = localStorage.getItem("user");
        if(!!saved) {
            let data = JSON.parse(saved);
            this.logIn(data.login, data.pass);
        }
    }
}