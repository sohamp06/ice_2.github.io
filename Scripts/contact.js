"use strict";

(function (core) {

    class Contact {
        constructor(name = "", contactNumber = "", emailAddress = "") {
            this._name = name;
            this._contactNumber = contactNumber;
            this._emailAddress = emailAddress;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            this._name = value;
        }

        get contactNumber() {
            return this._contactNumber;
        }

        set contactNumber(value) {
            this._contactNumber = value;
        }

        get emailAddress() {
            return this._emailAddress;
        }

        set emailAddress(value) {
            this._emailAddress = value;
        }

        toString() {
            return `name ${this._name}\n contactNumber ${this._contactNumber}\n emailAddress ${this._emailAddress}`;
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
    }
    core.Contact = Contact;
})(core || (core = {}));