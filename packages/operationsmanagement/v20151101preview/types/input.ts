import * as pulumi from "@pulumi/pulumi";
    /**
     * Parameter to pass to ARM template
     */
    export interface ArmTemplateParameterArgs {
        /**
         * name of the parameter.
         */
        name?: pulumi.Input<string>;
        /**
         * value for the parameter. In Jtoken 
         */
        value?: pulumi.Input<string>;
    }

    /**
     * ManagementAssociation properties supported by the OperationsManagement resource provider.
     */
    export interface ManagementAssociationPropertiesArgs {
        /**
         * The applicationId of the appliance for this association.
         */
        applicationId: pulumi.Input<string>;
    }

    /**
     * ManagementConfiguration properties supported by the OperationsManagement resource provider.
     */
    export interface ManagementConfigurationPropertiesArgs {
        /**
         * The applicationId of the appliance for this Management.
         */
        applicationId?: pulumi.Input<string>;
        /**
         * Parameters to run the ARM template
         */
        parameters: pulumi.Input<pulumi.Input<ArmTemplateParameterArgs>[]>;
        /**
         * The type of the parent resource.
         */
        parentResourceType: pulumi.Input<string>;
        /**
         * The Json object containing the ARM template to deploy
         */
        template: any;
    }

    /**
     * Plan for solution object supported by the OperationsManagement resource provider.
     */
    export interface SolutionPlanArgs {
        /**
         * name of the solution to be created. For Microsoft published solution it should be in the format of solutionType(workspaceName). SolutionType part is case sensitive. For third party solution, it can be anything.
         */
        name?: pulumi.Input<string>;
        /**
         * name of the solution to enabled/add. For Microsoft published gallery solution it should be in the format of OMSGallery/<solutionType>. This is case sensitive
         */
        product?: pulumi.Input<string>;
        /**
         * promotionCode, Not really used now, can you left as empty
         */
        promotionCode?: pulumi.Input<string>;
        /**
         * Publisher name. For gallery solution, it is Microsoft.
         */
        publisher?: pulumi.Input<string>;
    }

    /**
     * Solution properties supported by the OperationsManagement resource provider.
     */
    export interface SolutionPropertiesArgs {
        /**
         * The azure resources that will be contained within the solutions. They will be locked and gets deleted automatically when the solution is deleted.
         */
        containedResources?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The resources that will be referenced from this solution. Deleting any of those solution out of band will break the solution.
         */
        referencedResources?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The azure resourceId for the workspace where the solution will be deployed/enabled.
         */
        workspaceResourceId: pulumi.Input<string>;
    }
