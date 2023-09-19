import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
        kind?: pulumi.Input<string | enums.Kind>;
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
