"use strict";

(function (core)
{
    class User
    {
        constructor(displayName = "", emailAddress = "", username = "", password = "",)
        {
            this._displayName = displayName;
            this._emailAddress = emailAddress;
            this._username = username;
            this._password = password;
        }
        get displayName() {
            return this._displayName;
        }

        set displayName(value) {
            this._displayName = value;
        }

        get emailAddress() {
            return this._emailAddress;
        }

        set emailAddress(value) {
            this._emailAddress = value;
        }

        get username() {
            return this._username;
        }

        set username(value) {
            this._username = value;
        }

        toString()
        {
            return `Display Name: ${this._displayName} \n Email Address: ${this.EmailAddress} \n Username: ${this.username}`;
        }

        serialize() {
            if (this._name !== "" && this._contactNumber !== "" && this._emailAddress !== "") {
                return `${this._name}, ${this._contactNumber}, ${this._emailAddress}`;
            } else {
                console.log("One or more of the contact information is invalid or empty");
                return null;
            }
        }

        /**
         * Deserialize means to read data from local storage
         */
        deserialize(data) {
            //                      Array Position:   [0]         [1]             [2]
            // the split method does the following: "Bruce", "555-555-5555", "Bruce@batman.com"
            let propertyArray = data.split(",");
            this._name = propertyArray[0];
            this._contactNumber = propertyArray[1];
            this._emailAddress = propertyArray[2];
        }
        toJSON()
        {
            return
            {
                DisplayName : this._displayName;
                EmailAddress : this._emailAddress;
                Username: this._username;
                Password : this.Password
            }
        }

        fromJSON(data)
        {
            this._displayName = data.DisplayName;
            this._emailAddress = data.EmailAddress;
            this._username = data.Username;
            this._password = data.Password;
        }

        serialize()
        {
            if(this._displayName !== "" && this.emailAddress !== "" && this._username !== "")
            {
                return `${this._displayName}, ${this._emailAddress}, ${this._username}`;
            }
            console.error("Failed to serialize, one or more user attributes were missing.")
            return null
        }

        deserialize(data)
        {
            let propertyArray = data.split(",");
            this._displayName = propertyArray[0];
            this._emailAddress = propertyArray[1];
            this._username = propertyArray[2];
        }
    }
    core.User = user;
}) (core || (core = {}));