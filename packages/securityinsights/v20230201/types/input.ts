import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Alerts data type for data connectors.
     */
    export interface AlertsDataTypeOfDataConnectorArgs {
        /**
         * Alerts data type connection.
         */
        alerts?: pulumi.Input<DataConnectorDataTypeCommonArgs>;
    }

    /**
     * Describes an automation rule action to modify an object's properties
     */
    export interface AutomationRuleModifyPropertiesActionArgs {
        actionConfiguration?: pulumi.Input<IncidentPropertiesActionArgs>;
        /**
         * The type of the automation rule action.
         * Expected value is 'ModifyProperties'.
         */
        actionType: pulumi.Input<"ModifyProperties">;
        order: pulumi.Input<number>;
    }

    export interface AutomationRulePropertyArrayChangedValuesConditionArgs {
        arrayType?: pulumi.Input<string | enums.AutomationRulePropertyArrayChangedConditionSupportedArrayType>;
        changeType?: pulumi.Input<string | enums.AutomationRulePropertyArrayChangedConditionSupportedChangeType>;
    }

    export interface AutomationRulePropertyValuesChangedConditionArgs {
        changeType?: pulumi.Input<string | enums.AutomationRulePropertyChangedConditionSupportedChangedType>;
        operator?: pulumi.Input<string | enums.AutomationRulePropertyConditionSupportedOperator>;
        propertyName?: pulumi.Input<string | enums.AutomationRulePropertyChangedConditionSupportedPropertyType>;
        propertyValues?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface AutomationRulePropertyValuesConditionArgs {
        operator?: pulumi.Input<string | enums.AutomationRulePropertyConditionSupportedOperator>;
        /**
         * The property to evaluate in an automation rule property condition.
         */
        propertyName?: pulumi.Input<string | enums.AutomationRulePropertyConditionSupportedProperty>;
        propertyValues?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Describes an automation rule action to run a playbook
     */
    export interface AutomationRuleRunPlaybookActionArgs {
        actionConfiguration?: pulumi.Input<PlaybookActionPropertiesArgs>;
        /**
         * The type of the automation rule action.
         * Expected value is 'RunPlaybook'.
         */
        actionType: pulumi.Input<"RunPlaybook">;
        order: pulumi.Input<number>;
    }

    /**
     * Describes automation rule triggering logic.
     */
    export interface AutomationRuleTriggeringLogicArgs {
        /**
         * The conditions to evaluate to determine if the automation rule should be triggered on a given object.
         */
        conditions?: pulumi.Input<pulumi.Input<PropertyArrayChangedConditionPropertiesArgs | PropertyChangedConditionPropertiesArgs | PropertyConditionPropertiesArgs>[]>;
        /**
         * Determines when the automation rule should automatically expire and be disabled.
         */
        expirationTimeUtc?: pulumi.Input<string>;
        /**
         * Determines whether the automation rule is enabled or disabled.
         */
        isEnabled: pulumi.Input<boolean>;
        triggersOn: pulumi.Input<string | enums.TriggersOn>;
        triggersWhen: pulumi.Input<string | enums.TriggersWhen>;
    }

    /**
     * The available data types for Amazon Web Services CloudTrail data connector.
     */
    export interface AwsCloudTrailDataConnectorDataTypesArgs {
        /**
         * Logs data type.
         */
        logs?: pulumi.Input<AwsCloudTrailDataConnectorDataTypesLogsArgs>;
    }

    /**
     * Logs data type.
     */
    export interface AwsCloudTrailDataConnectorDataTypesLogsArgs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state?: pulumi.Input<string | enums.DataTypeState>;
    }

    /**
     * Common field for data type in data connectors.
     */
    export interface DataConnectorDataTypeCommonArgs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state?: pulumi.Input<string | enums.DataTypeState>;
    }

    /**
     * Describes related incident information for the bookmark
     */
    export interface IncidentInfoArgs {
        /**
         * Incident Id
         */
        incidentId?: pulumi.Input<string>;
        /**
         * Relation Name
         */
        relationName?: pulumi.Input<string>;
        /**
         * The severity of the incident
         */
        severity?: pulumi.Input<string | enums.IncidentSeverity>;
        /**
         * The title of the incident
         */
        title?: pulumi.Input<string>;
    }

    /**
     * Represents an incident label
     */
    export interface IncidentLabelArgs {
        /**
         * The name of the label
         */
        labelName: pulumi.Input<string>;
    }

    /**
     * Information on the user an incident is assigned to
     */
    export interface IncidentOwnerInfoArgs {
        /**
         * The name of the user the incident is assigned to.
         */
        assignedTo?: pulumi.Input<string>;
        /**
         * The email of the user the incident is assigned to.
         */
        email?: pulumi.Input<string>;
        /**
         * The object id of the user the incident is assigned to.
         */
        objectId?: pulumi.Input<string>;
        /**
         * The type of the owner the incident is assigned to.
         */
        ownerType?: pulumi.Input<string | enums.OwnerType>;
        /**
         * The user principal name of the user the incident is assigned to.
         */
        userPrincipalName?: pulumi.Input<string>;
    }

    export interface IncidentPropertiesActionArgs {
        /**
         * The reason the incident was closed
         */
        classification?: pulumi.Input<string | enums.IncidentClassification>;
        /**
         * Describes the reason the incident was closed.
         */
        classificationComment?: pulumi.Input<string>;
        /**
         * The classification reason the incident was closed with
         */
        classificationReason?: pulumi.Input<string | enums.IncidentClassificationReason>;
        /**
         * List of labels to add to the incident.
         */
        labels?: pulumi.Input<pulumi.Input<IncidentLabelArgs>[]>;
        /**
         * Information on the user an incident is assigned to
         */
        owner?: pulumi.Input<IncidentOwnerInfoArgs>;
        /**
         * The severity of the incident
         */
        severity?: pulumi.Input<string | enums.IncidentSeverity>;
        /**
         * The status of the incident
         */
        status?: pulumi.Input<string | enums.IncidentStatus>;
    }

    /**
     * The available data types for MCAS (Microsoft Cloud App Security) data connector.
     */
    export interface MCASDataConnectorDataTypesArgs {
        /**
         * Alerts data type connection.
         */
        alerts?: pulumi.Input<DataConnectorDataTypeCommonArgs>;
        /**
         * Discovery log data type connection.
         */
        discoveryLogs?: pulumi.Input<DataConnectorDataTypeCommonArgs>;
    }

    /**
     * Publisher or creator of the content item.
     */
    export interface MetadataAuthorArgs {
        /**
         * Email of author contact
         */
        email?: pulumi.Input<string>;
        /**
         * Link for author/vendor page
         */
        link?: pulumi.Input<string>;
        /**
         * Name of the author. Company or person.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * ies for the solution content item
     */
    export interface MetadataCategoriesArgs {
        /**
         * domain for the solution content item
         */
        domains?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Industry verticals for the solution content item
         */
        verticals?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex dependencies.
     */
    export interface MetadataDependenciesArgs {
        /**
         * Id of the content item we depend on
         */
        contentId?: pulumi.Input<string>;
        /**
         * This is the list of dependencies we must fulfill, according to the AND/OR operator
         */
        criteria?: pulumi.Input<pulumi.Input<MetadataDependenciesArgs>[]>;
        /**
         * Type of the content item we depend on
         */
        kind?: pulumi.Input<string>;
        /**
         * Name of the content item
         */
        name?: pulumi.Input<string>;
        /**
         * Operator used for list of dependencies in criteria array.
         */
        operator?: pulumi.Input<string | enums.Operator>;
        /**
         * Version of the the content item we depend on.  Can be blank, * or missing to indicate any version fulfills the dependency.  If version does not match our defined numeric format then an exact match is required.
         */
        version?: pulumi.Input<string>;
    }

    /**
     * The original source of the content item, where it comes from.
     */
    export interface MetadataSourceArgs {
        /**
         * Source type of the content
         */
        kind: pulumi.Input<string | enums.SourceKind>;
        /**
         * Name of the content source.  The repo name, solution name, LA workspace name etc.
         */
        name?: pulumi.Input<string>;
        /**
         * ID of the content source.  The solution ID, workspace ID, etc
         */
        sourceId?: pulumi.Input<string>;
    }

    /**
     * Support information for the content item.
     */
    export interface MetadataSupportArgs {
        /**
         * Email of support contact
         */
        email?: pulumi.Input<string>;
        /**
         * Link for support help, like to support page to open a ticket etc.
         */
        link?: pulumi.Input<string>;
        /**
         * Name of the support contact. Company or person.
         */
        name?: pulumi.Input<string>;
        /**
         * Type of support for content item
         */
        tier: pulumi.Input<string | enums.SupportTier>;
    }

    /**
     * The available data types for office data connector.
     */
    export interface OfficeDataConnectorDataTypesArgs {
        /**
         * Exchange data type connection.
         */
        exchange?: pulumi.Input<OfficeDataConnectorDataTypesExchangeArgs>;
        /**
         * SharePoint data type connection.
         */
        sharePoint?: pulumi.Input<OfficeDataConnectorDataTypesSharePointArgs>;
        /**
         * Teams data type connection.
         */
        teams?: pulumi.Input<OfficeDataConnectorDataTypesTeamsArgs>;
    }

    /**
     * Exchange data type connection.
     */
    export interface OfficeDataConnectorDataTypesExchangeArgs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state?: pulumi.Input<string | enums.DataTypeState>;
    }

    /**
     * SharePoint data type connection.
     */
    export interface OfficeDataConnectorDataTypesSharePointArgs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state?: pulumi.Input<string | enums.DataTypeState>;
    }

    /**
     * Teams data type connection.
     */
    export interface OfficeDataConnectorDataTypesTeamsArgs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state?: pulumi.Input<string | enums.DataTypeState>;
    }

    export interface PlaybookActionPropertiesArgs {
        /**
         * The resource id of the playbook resource.
         */
        logicAppResourceId: pulumi.Input<string>;
        /**
         * The tenant id of the playbook resource.
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Describes an automation rule condition that evaluates an array property's value change
     */
    export interface PropertyArrayChangedConditionPropertiesArgs {
        conditionProperties?: pulumi.Input<AutomationRulePropertyArrayChangedValuesConditionArgs>;
        /**
         *
         * Expected value is 'PropertyArrayChanged'.
         */
        conditionType: pulumi.Input<"PropertyArrayChanged">;
    }

    /**
     * Describes an automation rule condition that evaluates a property's value change
     */
    export interface PropertyChangedConditionPropertiesArgs {
        conditionProperties?: pulumi.Input<AutomationRulePropertyValuesChangedConditionArgs>;
        /**
         *
         * Expected value is 'PropertyChanged'.
         */
        conditionType: pulumi.Input<"PropertyChanged">;
    }

    /**
     * Describes an automation rule condition that evaluates a property's value
     */
    export interface PropertyConditionPropertiesArgs {
        conditionProperties?: pulumi.Input<AutomationRulePropertyValuesConditionArgs>;
        /**
         *
         * Expected value is 'Property'.
         */
        conditionType: pulumi.Input<"Property">;
    }

    /**
     * The available data types for TI (Threat Intelligence) data connector.
     */
    export interface TIDataConnectorDataTypesArgs {
        /**
         * Data type for indicators connection.
         */
        indicators?: pulumi.Input<TIDataConnectorDataTypesIndicatorsArgs>;
    }

    /**
     * Data type for indicators connection.
     */
    export interface TIDataConnectorDataTypesIndicatorsArgs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state?: pulumi.Input<string | enums.DataTypeState>;
    }

    /**
     * Describes external reference
     */
    export interface ThreatIntelligenceExternalReferenceArgs {
        /**
         * External reference description
         */
        description?: pulumi.Input<string>;
        /**
         * External reference ID
         */
        externalId?: pulumi.Input<string>;
        /**
         * External reference hashes
         */
        hashes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * External reference source name
         */
        sourceName?: pulumi.Input<string>;
        /**
         * External reference URL
         */
        url?: pulumi.Input<string>;
    }

    /**
     * Describes threat granular marking model entity
     */
    export interface ThreatIntelligenceGranularMarkingModelArgs {
        /**
         * Language granular marking model
         */
        language?: pulumi.Input<string>;
        /**
         * marking reference granular marking model
         */
        markingRef?: pulumi.Input<number>;
        /**
         * granular marking model selectors
         */
        selectors?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Describes threat kill chain phase entity
     */
    export interface ThreatIntelligenceKillChainPhaseArgs {
        /**
         * Kill chainName name
         */
        killChainName?: pulumi.Input<string>;
        /**
         * Phase name
         */
        phaseName?: pulumi.Input<string>;
    }

    /**
     * Describes parsed pattern entity
     */
    export interface ThreatIntelligenceParsedPatternArgs {
        /**
         * Pattern type key
         */
        patternTypeKey?: pulumi.Input<string>;
        /**
         * Pattern type keys
         */
        patternTypeValues?: pulumi.Input<pulumi.Input<ThreatIntelligenceParsedPatternTypeValueArgs>[]>;
    }

    /**
     * Describes threat kill chain phase entity
     */
    export interface ThreatIntelligenceParsedPatternTypeValueArgs {
        /**
         * Value of parsed pattern
         */
        value?: pulumi.Input<string>;
        /**
         * Type of the value
         */
        valueType?: pulumi.Input<string>;
    }

    /**
     * User information that made some action
     */
    export interface UserInfoArgs {
        /**
         * The object id of the user.
         */
        objectId?: pulumi.Input<string>;
    }

    /**
     * User information that made some action
     */
    export interface WatchlistUserInfoArgs {
        /**
         * The object id of the user.
         */
        objectId?: pulumi.Input<string>;
    }
