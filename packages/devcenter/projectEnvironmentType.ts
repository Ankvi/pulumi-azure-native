import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents an environment type.
 * Azure REST API version: 2023-04-01. Prior API version in Azure Native 1.x: 2022-09-01-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview.
 */
export class ProjectEnvironmentType extends pulumi.CustomResource {
    /**
     * Get an existing ProjectEnvironmentType resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProjectEnvironmentType {
        return new ProjectEnvironmentType(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devcenter:ProjectEnvironmentType';

    /**
     * Returns true if the given object is an instance of ProjectEnvironmentType.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProjectEnvironmentType {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProjectEnvironmentType.__pulumiType;
    }

    /**
     * The role definition assigned to the environment creator on backing resources.
     */
    public readonly creatorRoleAssignment!: pulumi.Output<types.outputs.ProjectEnvironmentTypeUpdatePropertiesResponseCreatorRoleAssignment | undefined>;
    /**
     * Id of a subscription that the environment type will be mapped to. The environment's resources will be deployed into this subscription.
     */
    public readonly deploymentTargetId!: pulumi.Output<string | undefined>;
    /**
     * Managed identity properties
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location for the environment type
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Defines whether this Environment Type can be used in this Project.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Role Assignments created on environment backing resources. This is a mapping from a user object ID to an object of role definition IDs.
     */
    public readonly userRoleAssignments!: pulumi.Output<{[key: string]: types.outputs.UserRoleAssignmentResponse} | undefined>;

    /**
     * Create a ProjectEnvironmentType resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectEnvironmentTypeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["creatorRoleAssignment"] = args ? args.creatorRoleAssignment : undefined;
            resourceInputs["deploymentTargetId"] = args ? args.deploymentTargetId : undefined;
            resourceInputs["environmentTypeName"] = args ? args.environmentTypeName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userRoleAssignments"] = args ? args.userRoleAssignments : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creatorRoleAssignment"] = undefined /*out*/;
            resourceInputs["deploymentTargetId"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userRoleAssignments"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devcenter/v20220801preview:ProjectEnvironmentType" }, { type: "azure-native:devcenter/v20220901preview:ProjectEnvironmentType" }, { type: "azure-native:devcenter/v20221012preview:ProjectEnvironmentType" }, { type: "azure-native:devcenter/v20221111preview:ProjectEnvironmentType" }, { type: "azure-native:devcenter/v20230101preview:ProjectEnvironmentType" }, { type: "azure-native:devcenter/v20230401:ProjectEnvironmentType" }, { type: "azure-native:devcenter/v20230801preview:ProjectEnvironmentType" }, { type: "azure-native:devcenter/v20231001preview:ProjectEnvironmentType" }, { type: "azure-native:devcenter/v20240201:ProjectEnvironmentType" }, { type: "azure-native:devcenter/v20240501preview:ProjectEnvironmentType" }, { type: "azure-native:devcenter/v20240601preview:ProjectEnvironmentType" }, { type: "azure-native:devcenter/v20240701preview:ProjectEnvironmentType" }, { type: "azure-native:devcenter/v20240801preview:ProjectEnvironmentType" }, { type: "azure-native:devcenter/v20241001preview:ProjectEnvironmentType" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ProjectEnvironmentType.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProjectEnvironmentType resource.
 */
export interface ProjectEnvironmentTypeArgs {
    /**
     * The role definition assigned to the environment creator on backing resources.
     */
    creatorRoleAssignment?: pulumi.Input<types.inputs.ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignmentArgs>;
    /**
     * Id of a subscription that the environment type will be mapped to. The environment's resources will be deployed into this subscription.
     */
    deploymentTargetId?: pulumi.Input<string>;
    /**
     * The name of the environment type.
     */
    environmentTypeName?: pulumi.Input<string>;
    /**
     * Managed identity properties
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The geo-location for the environment type
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Defines whether this Environment Type can be used in this Project.
     */
    status?: pulumi.Input<string | types.enums.EnvironmentTypeEnableStatus>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Role Assignments created on environment backing resources. This is a mapping from a user object ID to an object of role definition IDs.
     */
    userRoleAssignments?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.UserRoleAssignmentArgs>}>;
}