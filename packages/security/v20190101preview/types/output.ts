import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The target Event Hub to which event data will be exported. To learn more about Microsoft Defender for Cloud continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
     */
    export interface AutomationActionEventHubResponse {
        /**
         * The type of the action that will be triggered by the Automation
         * Expected value is 'EventHub'.
         */
        actionType: "EventHub";
        /**
         * The target Event Hub connection string (it will not be included in any response).
         */
        connectionString?: string;
        /**
         * The target Event Hub Azure Resource ID.
         */
        eventHubResourceId?: string;
        /**
         * The target Event Hub SAS policy name.
         */
        sasPolicyName: string;
    }

    /**
     * The logic app action that should be triggered. To learn more about Microsoft Defender for Cloud's Workflow Automation capabilities, visit https://aka.ms/ASCWorkflowAutomationLearnMore
     */
    export interface AutomationActionLogicAppResponse {
        /**
         * The type of the action that will be triggered by the Automation
         * Expected value is 'LogicApp'.
         */
        actionType: "LogicApp";
        /**
         * The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App
         */
        logicAppResourceId?: string;
        /**
         * The Logic App trigger URI endpoint (it will not be included in any response).
         */
        uri?: string;
    }

    /**
     * The Log Analytics Workspace to which event data will be exported. Security alerts data will reside in the 'SecurityAlert' table and the assessments data will reside in the 'SecurityRecommendation' table (under the 'Security'/'SecurityCenterFree' solutions). Note that in order to view the data in the workspace, the Security Center Log Analytics free/standard solution needs to be enabled on that workspace. To learn more about Microsoft Defender for Cloud continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
     */
    export interface AutomationActionWorkspaceResponse {
        /**
         * The type of the action that will be triggered by the Automation
         * Expected value is 'Workspace'.
         */
        actionType: "Workspace";
        /**
         * The fully qualified Log Analytics Workspace Azure Resource ID.
         */
        workspaceResourceId?: string;
    }

    /**
     * A rule set which evaluates all its rules upon an event interception. Only when all the included rules in the rule set will be evaluated as 'true', will the event trigger the defined actions.
     */
    export interface AutomationRuleSetResponse {
        rules?: AutomationTriggeringRuleResponse[];
    }

    /**
     * A single automation scope.
     */
    export interface AutomationScopeResponse {
        /**
         * The resources scope description.
         */
        description?: string;
        /**
         * The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs).
         */
        scopePath?: string;
    }

    /**
     * The source event types which evaluate the security automation set of rules. For example - security alerts and security assessments. To learn more about the supported security events data models schemas - please visit https://aka.ms/ASCAutomationSchemas.
     */
    export interface AutomationSourceResponse {
        /**
         * A valid event source type.
         */
        eventSource?: string;
        /**
         * A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical 'or').
         */
        ruleSets?: AutomationRuleSetResponse[];
    }

    /**
     * A rule which is evaluated upon event interception. The rule is configured by comparing a specific value from the event model to an expected value. This comparison is done by using one of the supported operators set.
     */
    export interface AutomationTriggeringRuleResponse {
        /**
         * The expected value.
         */
        expectedValue?: string;
        /**
         * A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType.
         */
        operator?: string;
        /**
         * The JPath of the entity model property that should be checked.
         */
        propertyJPath?: string;
        /**
         * The data type of the compared operands (string, integer, floating point number or a boolean [true/false]]
         */
        propertyType?: string;
    }

    /**
     * A more specific scope used to identify the alerts to suppress.
     */
    export interface ScopeElementResponse {
        /**
         * The alert entity type to suppress by.
         */
        field?: string;
    }

    export interface SuppressionAlertsScopeResponse {
        /**
         * All the conditions inside need to be true in order to suppress the alert
         */
        allOf: ScopeElementResponse[];
    }
