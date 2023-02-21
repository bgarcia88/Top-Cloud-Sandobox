import { LightningElement,api,wire } from 'lwc';
import getTrack from '@salesforce/apex/ConverObjectsController.getTrack';
import getTag from '@salesforce/apex/ConverObjectsController.getTag';
import getPing from '@salesforce/apex/ConverObjectsController.getPing';

export default class ConvertObjectsComponent extends LightningElement {
    isTrackVisible = false;
    isPingVisible = false;
    isTagVisible = false;
    @api type;
    connectedCallback() {
        if(this.type === 'Track'){
            this.isTrackVisible = true;
            return;
        }
        if(this.type === 'Tag'){
            this.isTagVisible = true;
            return;
        }
        if(this.type === 'Ping'){
             this.isPingVisible = true;
             return;
        }
        this.isTrackVisible = false;
        this.isPingVisible = false;
        this.isTagVisible = false;
    }

    @api recordId;
    @wire(getTrack, {idContact: '$recordId' }) tracks;
    @wire(getTag, {idContact: '$recordId' }) tags;
    @wire(getPing, {idContact: '$recordId' }) pings;
    //task
    subject;
    dueDate;
    priority;
    status;

    get options() {
        return [
            { label: 'Call', value: 'call' },
            { label: 'Email', value: 'email' },
            { label: 'Send Letter', value: 'sendLetter' },
            { label: 'Send Quote', value: 'sendQuote' },
            { label: 'Other', value: 'other' },
        ];
    }

    handleChangeSubject(event) {
        this.subject = event.detail.value;
    };
    handleChangeDueDate(event) {
        this.dueDate = event.detail.value;
    };
    handleChangePriority(event) {
        this.priority = event.detail.value;
    };
    handleChangeStatus(event) {
        this.status = event.detail.value;
    };
    
}