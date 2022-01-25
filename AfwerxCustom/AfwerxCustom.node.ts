import {
    IExecuteFunctions,
} from 'n8n-core';

import {
    IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

import {
    OptionsWithUri,
} from 'request';

import * as data from './data.json'

export class AfwerxCustom implements INodeType {
    description: INodeTypeDescription = {
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
        credentials: [
        ],
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
	default:'',
	description:'Primary email for the contact',
},

            // Node properties which the user gets displayed and
            // can change on the node.
        ],
    };


async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
      return [this.helpers.returnJsonArray(data)];
  }
}
