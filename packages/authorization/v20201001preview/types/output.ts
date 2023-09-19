import * as pulumi from "@pulumi/pulumi";
    export interface PolicyAssignmentPropertiesResponse {
        /**
         * Details of the policy
         */
        policy?: PolicyAssignmentPropertiesResponsePolicy;
        /**
         * Details of role definition
         */
        roleDefinition?: PolicyAssignmentPropertiesResponseRoleDefinition;
        /**
         * Details of the resource scope
         */
        scope?: PolicyAssignmentPropertiesResponseScope;
    }

    /**
     * Details of the policy
     */
    export interface PolicyAssignmentPropertiesResponsePolicy {
        /**
         * Id of the policy
         */
        id?: string;
        /**
         * The name of the entity last modified it
         */
        lastModifiedBy: PrincipalResponse;
        /**
         * The last modified date time.
         */
        lastModifiedDateTime?: string;
    }

    /**
     * Details of role definition
     */
    export interface PolicyAssignmentPropertiesResponseRoleDefinition {
        /**
         * Display name of the role definition
         */
        displayName?: string;
        /**
         * Id of the role definition
         */
        id?: string;
        /**
         * Type of the role definition
         */
        type?: string;
    }

    /**
     * Details of the resource scope
     */
    export interface PolicyAssignmentPropertiesResponseScope {
        /**
         * Display name of the resource
         */
        displayName?: string;
        /**
         * Scope id of the resource
         */
        id?: string;
        /**
         * Type of the resource
         */
        type?: string;
    }

    /**
     * The name of the entity last modified it
     */
    export interface PrincipalResponse {
        /**
         * The name of the principal made changes
         */
        displayName?: string;
        /**
         * Email of principal
         */
        email?: string;
        /**
         * The id of the principal made changes
         */
        id?: string;
        /**
         * Type of principal such as user , group etc
         */
        type?: string;
    }
