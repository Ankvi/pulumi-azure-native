import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface BasicAuthenticationResponse {
    /**
     * Gets or sets the password, return value will always be empty.
     */
    password?: string;
    /**
     * Gets or sets the HTTP authentication type.
     * Expected value is 'Basic'.
     */
    type: "Basic";
    /**
     * Gets or sets the username.
     */
    username?: string;
}

export interface ClientCertAuthenticationResponse {
    /**
     * Gets or sets the certificate expiration date.
     */
    certificateExpirationDate?: string;
    /**
     * Gets or sets the certificate subject name.
     */
    certificateSubjectName?: string;
    /**
     * Gets or sets the certificate thumbprint.
     */
    certificateThumbprint?: string;
    /**
     * Gets or sets the certificate password, return value will always be empty.
     */
    password?: string;
    /**
     * Gets or sets the pfx certificate. Accepts certification in base64 encoding, return value will always be empty.
     */
    pfx?: string;
    /**
     * Gets or sets the HTTP authentication type.
     * Expected value is 'ClientCertificate'.
     */
    type: "ClientCertificate";
}

export interface HttpRequestResponse {
    /**
     * Gets or sets the authentication method of the request.
     */
    authentication?: BasicAuthenticationResponse | ClientCertAuthenticationResponse | OAuthAuthenticationResponse;
    /**
     * Gets or sets the request body.
     */
    body?: string;
    /**
     * Gets or sets the headers.
     */
    headers?: {[key: string]: string};
    /**
     * Gets or sets the method of the request.
     */
    method?: string;
    /**
     * Gets or sets the URI of the request.
     */
    uri?: string;
}

export interface JobActionResponse {
    /**
     * Gets or sets the error action.
     */
    errorAction?: JobErrorActionResponse;
    /**
     * Gets or sets the storage queue message.
     */
    queueMessage?: StorageQueueMessageResponse;
    /**
     * Gets or sets the http requests.
     */
    request?: HttpRequestResponse;
    /**
     * Gets or sets the retry policy.
     */
    retryPolicy?: RetryPolicyResponse;
    /**
     * Gets or sets the service bus queue message.
     */
    serviceBusQueueMessage?: ServiceBusQueueMessageResponse;
    /**
     * Gets or sets the service bus topic message.
     */
    serviceBusTopicMessage?: ServiceBusTopicMessageResponse;
    /**
     * Gets or sets the job action type.
     */
    type?: string;
}

export interface JobCollectionPropertiesResponse {
    /**
     * Gets or sets the job collection quota.
     */
    quota?: JobCollectionQuotaResponse;
    /**
     * Gets or sets the SKU.
     */
    sku?: SkuResponse;
    /**
     * Gets or sets the state.
     */
    state?: string;
}

export interface JobCollectionQuotaResponse {
    /**
     * Gets or set the maximum job count.
     */
    maxJobCount?: number;
    /**
     * Gets or sets the maximum job occurrence.
     */
    maxJobOccurrence?: number;
    /**
     * Gets or set the maximum recurrence.
     */
    maxRecurrence?: JobMaxRecurrenceResponse;
}

export interface JobErrorActionResponse {
    /**
     * Gets or sets the storage queue message.
     */
    queueMessage?: StorageQueueMessageResponse;
    /**
     * Gets or sets the http requests.
     */
    request?: HttpRequestResponse;
    /**
     * Gets or sets the retry policy.
     */
    retryPolicy?: RetryPolicyResponse;
    /**
     * Gets or sets the service bus queue message.
     */
    serviceBusQueueMessage?: ServiceBusQueueMessageResponse;
    /**
     * Gets or sets the service bus topic message.
     */
    serviceBusTopicMessage?: ServiceBusTopicMessageResponse;
    /**
     * Gets or sets the job error action type.
     */
    type?: string;
}

export interface JobMaxRecurrenceResponse {
    /**
     * Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
     */
    frequency?: string;
    /**
     * Gets or sets the interval between retries.
     */
    interval?: number;
}

export interface JobPropertiesResponse {
    /**
     * Gets or sets the job action.
     */
    action?: JobActionResponse;
    /**
     * Gets or sets the job recurrence.
     */
    recurrence?: JobRecurrenceResponse;
    /**
     * Gets or sets the job start time.
     */
    startTime?: string;
    /**
     * Gets or set the job state.
     */
    state?: string;
    /**
     * Gets the job status.
     */
    status: JobStatusResponse;
}

export interface JobRecurrenceResponse {
    /**
     * Gets or sets the maximum number of times that the job should run.
     */
    count?: number;
    /**
     * Gets or sets the time at which the job will complete.
     */
    endTime?: string;
    /**
     * Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
     */
    frequency?: string;
    /**
     * Gets or sets the interval between retries.
     */
    interval?: number;
    schedule?: JobRecurrenceScheduleResponse;
}

export interface JobRecurrenceScheduleMonthlyOccurrenceResponse {
    /**
     * Gets or sets the day. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
     */
    day?: string;
    /**
     * Gets or sets the occurrence. Must be between -5 and 5.
     */
    occurrence?: number;
}

export interface JobRecurrenceScheduleResponse {
    /**
     * Gets or sets the hours of the day that the job should execute at.
     */
    hours?: number[];
    /**
     * Gets or sets the minutes of the hour that the job should execute at.
     */
    minutes?: number[];
    /**
     * Gets or sets the days of the month that the job should execute on. Must be between 1 and 31.
     */
    monthDays?: number[];
    /**
     * Gets or sets the occurrences of days within a month.
     */
    monthlyOccurrences?: JobRecurrenceScheduleMonthlyOccurrenceResponse[];
    /**
     * Gets or sets the days of the week that the job should execute on.
     */
    weekDays?: string[];
}

export interface JobStatusResponse {
    /**
     * Gets the number of times this job has executed.
     */
    executionCount: number;
    /**
     * Gets the number of times this job has failed.
     */
    failureCount: number;
    /**
     * Gets the number of faulted occurrences (occurrences that were retried and failed as many times as the retry policy states).
     */
    faultedCount: number;
    /**
     * Gets the time the last occurrence executed in ISO-8601 format.  Could be empty if job has not run yet.
     */
    lastExecutionTime: string;
    /**
     * Gets the time of the next occurrence in ISO-8601 format. Could be empty if the job is completed.
     */
    nextExecutionTime: string;
}

export interface OAuthAuthenticationResponse {
    /**
     * Gets or sets the audience.
     */
    audience?: string;
    /**
     * Gets or sets the client identifier.
     */
    clientId?: string;
    /**
     * Gets or sets the secret, return value will always be empty.
     */
    secret?: string;
    /**
     * Gets or sets the tenant.
     */
    tenant?: string;
    /**
     * Gets or sets the HTTP authentication type.
     * Expected value is 'ActiveDirectoryOAuth'.
     */
    type: "ActiveDirectoryOAuth";
}

export interface RetryPolicyResponse {
    /**
     * Gets or sets the number of times a retry should be attempted.
     */
    retryCount?: number;
    /**
     * Gets or sets the retry interval between retries, specify duration in ISO 8601 format.
     */
    retryInterval?: string;
    /**
     * Gets or sets the retry strategy to be used.
     */
    retryType?: string;
}

export interface ServiceBusAuthenticationResponse {
    /**
     * Gets or sets the SAS key.
     */
    sasKey?: string;
    /**
     * Gets or sets the SAS key name.
     */
    sasKeyName?: string;
    /**
     * Gets or sets the authentication type.
     */
    type?: string;
}

export interface ServiceBusBrokeredMessagePropertiesResponse {
    /**
     * Gets or sets the content type.
     */
    contentType?: string;
    /**
     * Gets or sets the correlation ID.
     */
    correlationId?: string;
    /**
     * Gets or sets the force persistence.
     */
    forcePersistence?: boolean;
    /**
     * Gets or sets the label.
     */
    label?: string;
    /**
     * Gets or sets the message ID.
     */
    messageId?: string;
    /**
     * Gets or sets the partition key.
     */
    partitionKey?: string;
    /**
     * Gets or sets the reply to.
     */
    replyTo?: string;
    /**
     * Gets or sets the reply to session ID.
     */
    replyToSessionId?: string;
    /**
     * Gets or sets the scheduled enqueue time UTC.
     */
    scheduledEnqueueTimeUtc?: string;
    /**
     * Gets or sets the session ID.
     */
    sessionId?: string;
    /**
     * Gets or sets the time to live.
     */
    timeToLive?: string;
    /**
     * Gets or sets the to.
     */
    to?: string;
    /**
     * Gets or sets the via partition key.
     */
    viaPartitionKey?: string;
}

export interface ServiceBusQueueMessageResponse {
    /**
     * Gets or sets the Service Bus authentication.
     */
    authentication?: ServiceBusAuthenticationResponse;
    /**
     * Gets or sets the brokered message properties.
     */
    brokeredMessageProperties?: ServiceBusBrokeredMessagePropertiesResponse;
    /**
     * Gets or sets the custom message properties.
     */
    customMessageProperties?: {[key: string]: string};
    /**
     * Gets or sets the message.
     */
    message?: string;
    /**
     * Gets or sets the namespace.
     */
    namespace?: string;
    /**
     * Gets or sets the queue name.
     */
    queueName?: string;
    /**
     * Gets or sets the transport type.
     */
    transportType?: string;
}

export interface ServiceBusTopicMessageResponse {
    /**
     * Gets or sets the Service Bus authentication.
     */
    authentication?: ServiceBusAuthenticationResponse;
    /**
     * Gets or sets the brokered message properties.
     */
    brokeredMessageProperties?: ServiceBusBrokeredMessagePropertiesResponse;
    /**
     * Gets or sets the custom message properties.
     */
    customMessageProperties?: {[key: string]: string};
    /**
     * Gets or sets the message.
     */
    message?: string;
    /**
     * Gets or sets the namespace.
     */
    namespace?: string;
    /**
     * Gets or sets the topic path.
     */
    topicPath?: string;
    /**
     * Gets or sets the transport type.
     */
    transportType?: string;
}

export interface SkuResponse {
    /**
     * Gets or set the SKU.
     */
    name?: string;
}

export interface StorageQueueMessageResponse {
    /**
     * Gets or sets the message.
     */
    message?: string;
    /**
     * Gets or sets the queue name.
     */
    queueName?: string;
    /**
     * Gets or sets the SAS key.
     */
    sasToken?: string;
    /**
     * Gets or sets the storage account name.
     */
    storageAccount?: string;
}
