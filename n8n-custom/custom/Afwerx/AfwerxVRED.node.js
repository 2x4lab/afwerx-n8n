"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfwerxVRED = void 0;
const data = require("./data.json");
class AfwerxVRED {
    constructor() {
        this.description = {
            displayName: 'AfwerxVRED',
            name: 'AfwerxVRED',
            icon: 'file:airforceLogo.png',
            group: ['transform'],
            version: 1,
            description: 'Custom Airforce Node',
            defaults: {
                name: 'AfwerxVRED',
                color: '#1A82e2',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [],
            properties: [],
        };
    }
    async execute() {
        const min = Math.ceil(100);
        const max = Math.floor(10);
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const sampleDataObj = data[0];
        let randomObject = {};
        let sampleData = [];
        const minId = Math.ceil(999);
        const maxId = Math.floor(100);
        for (let i = 0; i < randomNumber; i++) {
            for (var key in sampleDataObj) {
                let randomID = Math.floor(Math.random() * (maxId - minId + 1)) + minId;
                randomObject[key] = sampleDataObj[key] + "_" + randomID.toString();
            }
            sampleData = [...sampleData, randomObject];
        }
        return [this.helpers.returnJsonArray(sampleData)];
    }
}
exports.AfwerxVRED = AfwerxVRED;
//# sourceMappingURL=AfwerxVRED.node.js.map