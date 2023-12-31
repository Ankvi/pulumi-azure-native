import * as pulumi from "@pulumi/pulumi";
/**
 * Parameter to pass to ARM template
 */
export interface ArmTemplateParameterResponse {
    /**
     * name of the parameter.
     */
    name?: string;
    /**
     * value for the parameter. In Jtoken 
     */
    value?: string;
}

/**
 * ManagementAssociation properties supported by the OperationsManagement resource provider.
 */
export interface ManagementAssociationPropertiesResponse {
    /**
     * The applicationId of the appliance for this association.
     */
    applicationId: string;
}

/**
 * ManagementConfiguration properties supported by the OperationsManagement resource provider.
 */
export interface ManagementConfigurationPropertiesResponse {
    /**
     * The applicationId of the appliance for this Management.
     */
    applicationId?: string;
    /**
     * Parameters to run the ARM template
     */
    parameters: ArmTemplateParameterResponse[];
    /**
     * The type of the parent resource.
     */
    parentResourceType: string;
    /**
     * The provisioning state for the ManagementConfiguration.
     */
    provisioningState: string;
    /**
     * The Json object containing the ARM template to deploy
     */
    template: any;
}

/**
 * Plan for solution object supported by the OperationsManagement resource provider.
 */
export interface SolutionPlanResponse {
    /**
     * name of the solution to be created. For Microsoft published solution it should be in the format of solutionType(workspaceName). SolutionType part is case sensitive. For third party solution, it can be anything.
     */
    name?: string;
    /**
     * name of the solution to enabled/add. For Microsoft published gallery solution it should be in the format of OMSGallery/<solutionType>. This is case sensitive
     */
    product?: string;
    /**
     * promotionCode, Not really used now, can you left as empty
     */
    promotionCode?: string;
    /**
     * Publisher name. For gallery solution, it is Microsoft.
     */
    publisher?: string;
}

/**
 * Solution properties supported by the OperationsManagement resource provider.
 */
export interface SolutionPropertiesResponse {
    /**
     * The azure resources that will be contained within the solutions. They will be locked and gets deleted automatically when the solution is deleted.
     */
    containedResources?: string[];
    /**
     * The provisioning state for the solution.
     */
    provisioningState: string;
    /**
     * The resources that will be referenced from this solution. Deleting any of those solution out of band will break the solution.
     */
    referencedResources?: string[];
    /**
     * The azure resourceId for the workspace where the solution will be deployed/enabled.
     */
    workspaceResourceId: string;
}
