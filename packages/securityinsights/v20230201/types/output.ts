import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Alerts data type for data connectors.
     */
    export interface AlertsDataTypeOfDataConnectorResponse {
        /**
         * Alerts data type connection.
         */
        alerts?: DataConnectorDataTypeCommonResponse;
    }

    /**
     * Describes an automation rule action to modify an object's properties
     */
    export interface AutomationRuleModifyPropertiesActionResponse {
        actionConfiguration?: IncidentPropertiesActionResponse;
        /**
         * The type of the automation rule action.
         * Expected value is 'ModifyProperties'.
         */
        actionType: "ModifyProperties";
        order: number;
    }

    export interface AutomationRulePropertyArrayChangedValuesConditionResponse {
        arrayType?: string;
        changeType?: string;
    }

    export interface AutomationRulePropertyValuesChangedConditionResponse {
        changeType?: string;
        operator?: string;
        propertyName?: string;
        propertyValues?: string[];
    }

    export interface AutomationRulePropertyValuesConditionResponse {
        operator?: string;
        /**
         * The property to evaluate in an automation rule property condition.
         */
        propertyName?: string;
        propertyValues?: string[];
    }

    /**
     * Describes an automation rule action to run a playbook
     */
    export interface AutomationRuleRunPlaybookActionResponse {
        actionConfiguration?: PlaybookActionPropertiesResponse;
        /**
         * The type of the automation rule action.
         * Expected value is 'RunPlaybook'.
         */
        actionType: "RunPlaybook";
        order: number;
    }

    /**
     * Describes automation rule triggering logic.
     */
    export interface AutomationRuleTriggeringLogicResponse {
        /**
         * The conditions to evaluate to determine if the automation rule should be triggered on a given object.
         */
        conditions?: (PropertyArrayChangedConditionPropertiesResponse | PropertyChangedConditionPropertiesResponse | PropertyConditionPropertiesResponse)[];
        /**
         * Determines when the automation rule should automatically expire and be disabled.
         */
        expirationTimeUtc?: string;
        /**
         * Determines whether the automation rule is enabled or disabled.
         */
        isEnabled: boolean;
        triggersOn: string;
        triggersWhen: string;
    }

    /**
     * The available data types for Amazon Web Services CloudTrail data connector.
     */
    export interface AwsCloudTrailDataConnectorDataTypesResponse {
        /**
         * Logs data type.
         */
        logs?: AwsCloudTrailDataConnectorDataTypesResponseLogs;
    }

    /**
     * Logs data type.
     */
    export interface AwsCloudTrailDataConnectorDataTypesResponseLogs {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state?: string;
    }

    /**
     * Information on the client (user or application) that made some action
     */
    export interface ClientInfoResponse {
        /**
         * The email of the client.
         */
        email?: string;
        /**
         * The name of the client.
         */
        name?: string;
        /**
         * The object id of the client.
         */
        objectId?: string;
        /**
         * The user principal name of the client.
         */
        userPrincipalName?: string;
    }

    /**
     * Common field for data type in data connectors.
     */
    export interface DataConnectorDataTypeCommonResponse {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state?: string;
    }

    /**
     * Incident additional data property bag.
     */
    export interface IncidentAdditionalDataResponse {
        /**
         * List of product names of alerts in the incident
         */
        alertProductNames: string[];
        /**
         * The number of alerts in the incident
         */
        alertsCount: number;
        /**
         * The number of bookmarks in the incident
         */
        bookmarksCount: number;
        /**
         * The number of comments in the incident
         */
        commentsCount: number;
        /**
         * The provider incident url to the incident in Microsoft 365 Defender portal
         */
        providerIncidentUrl: string;
        /**
         * The tactics associated with incident
         */
        tactics: string[];
    }

    /**
     * Describes related incident information for the bookmark
     */
    export interface IncidentInfoResponse {
        /**
         * Incident Id
         */
        incidentId?: string;
        /**
         * Relation Name
         */
        relationName?: string;
        /**
         * The severity of the incident
         */
        severity?: string;
        /**
         * The title of the incident
         */
        title?: string;
    }

    /**
     * Represents an incident label
     */
    export interface IncidentLabelResponse {
        /**
         * The name of the label
         */
        labelName: string;
        /**
         * The type of the label
         */
        labelType: string;
    }

    /**
     * Information on the user an incident is assigned to
     */
    export interface IncidentOwnerInfoResponse {
        /**
         * The name of the user the incident is assigned to.
         */
        assignedTo?: string;
        /**
         * The email of the user the incident is assigned to.
         */
        email?: string;
        /**
         * The object id of the user the incident is assigned to.
         */
        objectId?: string;
        /**
         * The type of the owner the incident is assigned to.
         */
        ownerType?: string;
        /**
         * The user principal name of the user the incident is assigned to.
         */
        userPrincipalName?: string;
    }

    export interface IncidentPropertiesActionResponse {
        /**
         * The reason the incident was closed
         */
        classification?: string;
        /**
         * Describes the reason the incident was closed.
         */
        classificationComment?: string;
        /**
         * The classification reason the incident was closed with
         */
        classificationReason?: string;
        /**
         * List of labels to add to the incident.
         */
        labels?: IncidentLabelResponse[];
        /**
         * Information on the user an incident is assigned to
         */
        owner?: IncidentOwnerInfoResponse;
        /**
         * The severity of the incident
         */
        severity?: string;
        /**
         * The status of the incident
         */
        status?: string;
    }

    /**
     * The available data types for MCAS (Microsoft Cloud App Security) data connector.
     */
    export interface MCASDataConnectorDataTypesResponse {
        /**
         * Alerts data type connection.
         */
        alerts?: DataConnectorDataTypeCommonResponse;
        /**
         * Discovery log data type connection.
         */
        discoveryLogs?: DataConnectorDataTypeCommonResponse;
    }

    /**
     * Publisher or creator of the content item.
     */
    export interface MetadataAuthorResponse {
        /**
         * Email of author contact
         */
        email?: string;
        /**
         * Link for author/vendor page
         */
        link?: string;
        /**
         * Name of the author. Company or person.
         */
        name?: string;
    }

    /**
     * ies for the solution content item
     */
    export interface MetadataCategoriesResponse {
        /**
         * domain for the solution content item
         */
        domains?: string[];
        /**
         * Industry verticals for the solution content item
         */
        verticals?: string[];
    }

    /**
     * Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex dependencies.
     */
    export interface MetadataDependenciesResponse {
        /**
         * Id of the content item we depend on
         */
        contentId?: string;
        /**
         * This is the list of dependencies we must fulfill, according to the AND/OR operator
         */
        criteria?: MetadataDependenciesResponse[];
        /**
         * Type of the content item we depend on
         */
        kind?: string;
        /**
         * Name of the content item
         */
        name?: string;
        /**
         * Operator used for list of dependencies in criteria array.
         */
        operator?: string;
        /**
         * Version of the the content item we depend on.  Can be blank, * or missing to indicate any version fulfills the dependency.  If version does not match our defined numeric format then an exact match is required.
         */
        version?: string;
    }

    /**
     * The original source of the content item, where it comes from.
     */
    export interface MetadataSourceResponse {
        /**
         * Source type of the content
         */
        kind: string;
        /**
         * Name of the content source.  The repo name, solution name, LA workspace name etc.
         */
        name?: string;
        /**
         * ID of the content source.  The solution ID, workspace ID, etc
         */
        sourceId?: string;
    }

    /**
     * Support information for the content item.
     */
    export interface MetadataSupportResponse {
        /**
         * Email of support contact
         */
        email?: string;
        /**
         * Link for support help, like to support page to open a ticket etc.
         */
        link?: string;
        /**
         * Name of the support contact. Company or person.
         */
        name?: string;
        /**
         * Type of support for content item
         */
        tier: string;
    }

    /**
     * The available data types for office data connector.
     */
    export interface OfficeDataConnectorDataTypesResponse {
        /**
         * Exchange data type connection.
         */
        exchange?: OfficeDataConnectorDataTypesResponseExchange;
        /**
         * SharePoint data type connection.
         */
        sharePoint?: OfficeDataConnectorDataTypesResponseSharePoint;
        /**
         * Teams data type connection.
         */
        teams?: OfficeDataConnectorDataTypesResponseTeams;
    }

    /**
     * Exchange data type connection.
     */
    export interface OfficeDataConnectorDataTypesResponseExchange {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state?: string;
    }

    /**
     * SharePoint data type connection.
     */
    export interface OfficeDataConnectorDataTypesResponseSharePoint {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state?: string;
    }

    /**
     * Teams data type connection.
     */
    export interface OfficeDataConnectorDataTypesResponseTeams {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state?: string;
    }

    export interface PlaybookActionPropertiesResponse {
        /**
         * The resource id of the playbook resource.
         */
        logicAppResourceId: string;
        /**
         * The tenant id of the playbook resource.
         */
        tenantId?: string;
    }

    /**
     * Describes an automation rule condition that evaluates an array property's value change
     */
    export interface PropertyArrayChangedConditionPropertiesResponse {
        conditionProperties?: AutomationRulePropertyArrayChangedValuesConditionResponse;
        /**
         *
         * Expected value is 'PropertyArrayChanged'.
         */
        conditionType: "PropertyArrayChanged";
    }

    /**
     * Describes an automation rule condition that evaluates a property's value change
     */
    export interface PropertyChangedConditionPropertiesResponse {
        conditionProperties?: AutomationRulePropertyValuesChangedConditionResponse;
        /**
         *
         * Expected value is 'PropertyChanged'.
         */
        conditionType: "PropertyChanged";
    }

    /**
     * Describes an automation rule condition that evaluates a property's value
     */
    export interface PropertyConditionPropertiesResponse {
        conditionProperties?: AutomationRulePropertyValuesConditionResponse;
        /**
         *
         * Expected value is 'Property'.
         */
        conditionType: "Property";
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }

    /**
     * The available data types for TI (Threat Intelligence) data connector.
     */
    export interface TIDataConnectorDataTypesResponse {
        /**
         * Data type for indicators connection.
         */
        indicators?: TIDataConnectorDataTypesResponseIndicators;
    }

    /**
     * Data type for indicators connection.
     */
    export interface TIDataConnectorDataTypesResponseIndicators {
        /**
         * Describe whether this data type connection is enabled or not.
         */
        state?: string;
    }

    /**
     * User information that made some action
     */
    export interface UserInfoResponse {
        /**
         * The email of the user.
         */
        email: string;
        /**
         * The name of the user.
         */
        name: string;
        /**
         * The object id of the user.
         */
        objectId?: string;
    }

    /**
     * User information that made some action
     */
    export interface WatchlistUserInfoResponse {
        /**
         * The email of the user.
         */
        email: string;
        /**
         * The name of the user.
         */
        name: string;
        /**
         * The object id of the user.
         */
        objectId?: string;
    }
