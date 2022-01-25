"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfwerxCustom = void 0;
const data = require("./data.json");
class AfwerxCustom {
    constructor() {
        this.description = {
            displayName: 'AfwerxCustom',
            name: 'afwerxCustom',
            icon: 'file:afwerxCustom.png',
            group: ['transform'],
            version: 1,
            description: 'Custom Airforce Node',
            defaults: {
                name: 'AfwerxCustom',
                color: '#1A82e2',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [],
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    options: [
                        {
                            name: 'Contact',
                            value: 'contact',
                        },
                    ],
                    default: 'contact',
                    required: true,
                    description: 'Resource to consume',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Create',
                            value: 'create',
                            description: 'Create a contact',
                        },
                    ],
                    default: 'create',
                    description: 'The operation to perform.',
                },
                {
                    displayName: 'Email',
                    name: 'email',
                    type: 'string',
                    required: true,
                    displayOptions: {
                        show: {
                            operation: [
                                'create',
                            ],
                            resource: [
                                'contact',
                            ],
                        },
                    },
                    default: '',
                    description: 'Primary email for the contact',
                },
            ],
        };
    }
    async execute() {
        return [this.helpers.returnJsonArray(data)];
    }
}
exports.AfwerxCustom = AfwerxCustom;
//# sourceMappingURL=AfwerxCustom.node.js.map