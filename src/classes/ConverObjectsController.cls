public with sharing class ConverObjectsController {
    @AuraEnabled(cacheable=true)
    public  static List <Track__c> getTrack(Id idContact) {
        return[
            SELECT  Id,
            Name,
            Tracking_reason__c,
            Track_reminder_date__c, 
            Secondary_recruiter__c,
            OwnerId, 
            Candidate__c 
            FROM Track__c 
            WHERE Candidate__c =: idContact
            WITH SECURITY_ENFORCED
            LIMIT 1];
    }

    @AuraEnabled(cacheable=true)
    public  static List <Tag__c> getTag(Id idContact) {
        return[
            SELECT  Id,
            Name,
            Tagged_For__c,
            Tagging_Reason__c, 
            Skills__c, 
            OwnerId, 
            Secondary_Recruiter__c ,
            Candidate__c 
            FROM Tag__c 
            WHERE Candidate__c =: idContact
            WITH SECURITY_ENFORCED
            LIMIT 1];
    }

    @AuraEnabled(cacheable=true)
    public  static List <Ping__c> getPing(Id idContact) {
        return[
            SELECT  Id,
            Name, 
            Pinging_reason__c, 
            Ping_reminder_date__c, 
            Ping_Channel__c,
            Secondary_Recruiter__c ,
            OwnerId,
            Contact__c 
            FROM Ping__c 
            WHERE Contact__c =: idContact
            WITH SECURITY_ENFORCED
            LIMIT 5];
    }

}