import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface BasicAuthenticationArgs {
        /**
         * Gets or sets the password, return value will always be empty.
         */
        password?: pulumi.Input<string>;
        /**
         * Gets or sets the HTTP authentication type.
         * Expected value is 'Basic'.
         */
        type: pulumi.Input<"Basic">;
        /**
         * Gets or sets the username.
         */
        username?: pulumi.Input<string>;
    }

    export interface ClientCertAuthenticationArgs {
        /**
         * Gets or sets the certificate expiration date.
         */
        certificateExpirationDate?: pulumi.Input<string>;
        /**
         * Gets or sets the certificate subject name.
         */
        certificateSubjectName?: pulumi.Input<string>;
        /**
         * Gets or sets the certificate thumbprint.
         */
        certificateThumbprint?: pulumi.Input<string>;
        /**
         * Gets or sets the certificate password, return value will always be empty.
         */
        password?: pulumi.Input<string>;
        /**
         * Gets or sets the pfx certificate. Accepts certification in base64 encoding, return value will always be empty.
         */
        pfx?: pulumi.Input<string>;
        /**
         * Gets or sets the HTTP authentication type.
         * Expected value is 'ClientCertificate'.
         */
        type: pulumi.Input<"ClientCertificate">;
    }

    export interface HttpRequestArgs {
        /**
         * Gets or sets the authentication method of the request.
         */
        authentication?: pulumi.Input<BasicAuthenticationArgs | ClientCertAuthenticationArgs | OAuthAuthenticationArgs>;
        /**
         * Gets or sets the request body.
         */
        body?: pulumi.Input<string>;
        /**
         * Gets or sets the headers.
         */
        headers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the method of the request.
         */
        method?: pulumi.Input<string>;
        /**
         * Gets or sets the URI of the request.
         */
        uri?: pulumi.Input<string>;
    }

    export interface JobActionArgs {
        /**
         * Gets or sets the error action.
         */
        errorAction?: pulumi.Input<JobErrorActionArgs>;
        /**
         * Gets or sets the storage queue message.
         */
        queueMessage?: pulumi.Input<StorageQueueMessageArgs>;
        /**
         * Gets or sets the http requests.
         */
        request?: pulumi.Input<HttpRequestArgs>;
        /**
         * Gets or sets the retry policy.
         */
        retryPolicy?: pulumi.Input<RetryPolicyArgs>;
        /**
         * Gets or sets the service bus queue message.
         */
        serviceBusQueueMessage?: pulumi.Input<ServiceBusQueueMessageArgs>;
        /**
         * Gets or sets the service bus topic message.
         */
        serviceBusTopicMessage?: pulumi.Input<ServiceBusTopicMessageArgs>;
        /**
         * Gets or sets the job action type.
         */
        type?: pulumi.Input<enums.JobActionType>;
    }

    export interface JobCollectionPropertiesArgs {
        /**
         * Gets or sets the job collection quota.
         */
        quota?: pulumi.Input<JobCollectionQuotaArgs>;
        /**
         * Gets or sets the SKU.
         */
        sku?: pulumi.Input<SkuArgs>;
        /**
         * Gets or sets the state.
         */
        state?: pulumi.Input<enums.JobCollectionState>;
    }

    export interface JobCollectionQuotaArgs {
        /**
         * Gets or set the maximum job count.
         */
        maxJobCount?: pulumi.Input<number>;
        /**
         * Gets or sets the maximum job occurrence.
         */
        maxJobOccurrence?: pulumi.Input<number>;
        /**
         * Gets or set the maximum recurrence.
         */
        maxRecurrence?: pulumi.Input<JobMaxRecurrenceArgs>;
    }

    export interface JobErrorActionArgs {
        /**
         * Gets or sets the storage queue message.
         */
        queueMessage?: pulumi.Input<StorageQueueMessageArgs>;
        /**
         * Gets or sets the http requests.
         */
        request?: pulumi.Input<HttpRequestArgs>;
        /**
         * Gets or sets the retry policy.
         */
        retryPolicy?: pulumi.Input<RetryPolicyArgs>;
        /**
         * Gets or sets the service bus queue message.
         */
        serviceBusQueueMessage?: pulumi.Input<ServiceBusQueueMessageArgs>;
        /**
         * Gets or sets the service bus topic message.
         */
        serviceBusTopicMessage?: pulumi.Input<ServiceBusTopicMessageArgs>;
        /**
         * Gets or sets the job error action type.
         */
        type?: pulumi.Input<enums.JobActionType>;
    }

    export interface JobMaxRecurrenceArgs {
        /**
         * Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
         */
        frequency?: pulumi.Input<enums.RecurrenceFrequency>;
        /**
         * Gets or sets the interval between retries.
         */
        interval?: pulumi.Input<number>;
    }

    export interface JobPropertiesArgs {
        /**
         * Gets or sets the job action.
         */
        action?: pulumi.Input<JobActionArgs>;
        /**
         * Gets or sets the job recurrence.
         */
        recurrence?: pulumi.Input<JobRecurrenceArgs>;
        /**
         * Gets or sets the job start time.
         */
        startTime?: pulumi.Input<string>;
        /**
         * Gets or set the job state.
         */
        state?: pulumi.Input<enums.JobState>;
    }

    export interface JobRecurrenceArgs {
        /**
         * Gets or sets the maximum number of times that the job should run.
         */
        count?: pulumi.Input<number>;
        /**
         * Gets or sets the time at which the job will complete.
         */
        endTime?: pulumi.Input<string>;
        /**
         * Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
         */
        frequency?: pulumi.Input<enums.RecurrenceFrequency>;
        /**
         * Gets or sets the interval between retries.
         */
        interval?: pulumi.Input<number>;
        schedule?: pulumi.Input<JobRecurrenceScheduleArgs>;
    }

    export interface JobRecurrenceScheduleArgs {
        /**
         * Gets or sets the hours of the day that the job should execute at.
         */
        hours?: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * Gets or sets the minutes of the hour that the job should execute at.
         */
        minutes?: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * Gets or sets the days of the month that the job should execute on. Must be between 1 and 31.
         */
        monthDays?: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * Gets or sets the occurrences of days within a month.
         */
        monthlyOccurrences?: pulumi.Input<pulumi.Input<JobRecurrenceScheduleMonthlyOccurrenceArgs>[]>;
        /**
         * Gets or sets the days of the week that the job should execute on.
         */
        weekDays?: pulumi.Input<pulumi.Input<enums.DayOfWeek>[]>;
    }

    export interface JobRecurrenceScheduleMonthlyOccurrenceArgs {
        /**
         * Gets or sets the day. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
         */
        day?: pulumi.Input<enums.JobScheduleDay>;
        /**
         * Gets or sets the occurrence. Must be between -5 and 5.
         */
        occurrence?: pulumi.Input<number>;
    }

    export interface OAuthAuthenticationArgs {
        /**
         * Gets or sets the audience.
         */
        audience?: pulumi.Input<string>;
        /**
         * Gets or sets the client identifier.
         */
        clientId?: pulumi.Input<string>;
        /**
         * Gets or sets the secret, return value will always be empty.
         */
        secret?: pulumi.Input<string>;
        /**
         * Gets or sets the tenant.
         */
        tenant?: pulumi.Input<string>;
        /**
         * Gets or sets the HTTP authentication type.
         * Expected value is 'ActiveDirectoryOAuth'.
         */
        type: pulumi.Input<"ActiveDirectoryOAuth">;
    }

    export interface RetryPolicyArgs {
        /**
         * Gets or sets the number of times a retry should be attempted.
         */
        retryCount?: pulumi.Input<number>;
        /**
         * Gets or sets the retry interval between retries, specify duration in ISO 8601 format.
         */
        retryInterval?: pulumi.Input<string>;
        /**
         * Gets or sets the retry strategy to be used.
         */
        retryType?: pulumi.Input<enums.RetryType>;
    }

    export interface ServiceBusAuthenticationArgs {
        /**
         * Gets or sets the SAS key.
         */
        sasKey?: pulumi.Input<string>;
        /**
         * Gets or sets the SAS key name.
         */
        sasKeyName?: pulumi.Input<string>;
        /**
         * Gets or sets the authentication type.
         */
        type?: pulumi.Input<enums.ServiceBusAuthenticationType>;
    }

    export interface ServiceBusBrokeredMessagePropertiesArgs {
        /**
         * Gets or sets the content type.
         */
        contentType?: pulumi.Input<string>;
        /**
         * Gets or sets the correlation ID.
         */
        correlationId?: pulumi.Input<string>;
        /**
         * Gets or sets the force persistence.
         */
        forcePersistence?: pulumi.Input<boolean>;
        /**
         * Gets or sets the label.
         */
        label?: pulumi.Input<string>;
        /**
         * Gets or sets the message ID.
         */
        messageId?: pulumi.Input<string>;
        /**
         * Gets or sets the partition key.
         */
        partitionKey?: pulumi.Input<string>;
        /**
         * Gets or sets the reply to.
         */
        replyTo?: pulumi.Input<string>;
        /**
         * Gets or sets the reply to session ID.
         */
        replyToSessionId?: pulumi.Input<string>;
        /**
         * Gets or sets the scheduled enqueue time UTC.
         */
        scheduledEnqueueTimeUtc?: pulumi.Input<string>;
        /**
         * Gets or sets the session ID.
         */
        sessionId?: pulumi.Input<string>;
        /**
         * Gets or sets the time to live.
         */
        timeToLive?: pulumi.Input<string>;
        /**
         * Gets or sets the to.
         */
        to?: pulumi.Input<string>;
        /**
         * Gets or sets the via partition key.
         */
        viaPartitionKey?: pulumi.Input<string>;
    }

    export interface ServiceBusQueueMessageArgs {
        /**
         * Gets or sets the Service Bus authentication.
         */
        authentication?: pulumi.Input<ServiceBusAuthenticationArgs>;
        /**
         * Gets or sets the brokered message properties.
         */
        brokeredMessageProperties?: pulumi.Input<ServiceBusBrokeredMessagePropertiesArgs>;
        /**
         * Gets or sets the custom message properties.
         */
        customMessageProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the message.
         */
        message?: pulumi.Input<string>;
        /**
         * Gets or sets the namespace.
         */
        namespace?: pulumi.Input<string>;
        /**
         * Gets or sets the queue name.
         */
        queueName?: pulumi.Input<string>;
        /**
         * Gets or sets the transport type.
         */
        transportType?: pulumi.Input<enums.ServiceBusTransportType>;
    }

    export interface ServiceBusTopicMessageArgs {
        /**
         * Gets or sets the Service Bus authentication.
         */
        authentication?: pulumi.Input<ServiceBusAuthenticationArgs>;
        /**
         * Gets or sets the brokered message properties.
         */
        brokeredMessageProperties?: pulumi.Input<ServiceBusBrokeredMessagePropertiesArgs>;
        /**
         * Gets or sets the custom message properties.
         */
        customMessageProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the message.
         */
        message?: pulumi.Input<string>;
        /**
         * Gets or sets the namespace.
         */
        namespace?: pulumi.Input<string>;
        /**
         * Gets or sets the topic path.
         */
        topicPath?: pulumi.Input<string>;
        /**
         * Gets or sets the transport type.
         */
        transportType?: pulumi.Input<enums.ServiceBusTransportType>;
    }

    export interface SkuArgs {
        /**
         * Gets or set the SKU.
         */
        name?: pulumi.Input<enums.SkuDefinition>;
    }

    export interface StorageQueueMessageArgs {
        /**
         * Gets or sets the message.
         */
        message?: pulumi.Input<string>;
        /**
         * Gets or sets the queue name.
         */
        queueName?: pulumi.Input<string>;
        /**
         * Gets or sets the SAS key.
         */
        sasToken?: pulumi.Input<string>;
        /**
         * Gets or sets the storage account name.
         */
        storageAccount?: pulumi.Input<string>;
    }
