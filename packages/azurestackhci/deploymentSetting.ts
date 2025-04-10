import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Edge device resource
 *
 * Uses Azure REST API version 2023-08-01-preview.
 *
 * Other available API versions: 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-04-01, 2024-09-01-preview, 2024-12-01-preview.
 */
export class DeploymentSetting extends pulumi.CustomResource {
    /**
     * Get an existing DeploymentSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DeploymentSetting {
        return new DeploymentSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci:DeploymentSetting';

    /**
     * Returns true if the given object is an instance of DeploymentSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DeploymentSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DeploymentSetting.__pulumiType;
    }

    /**
     * Azure resource ids of Arc machines to be part of cluster.
     */
    public readonly arcNodeResourceIds!: pulumi.Output<string[]>;
    /**
     * Scale units will contains list of deployment data
     */
    public readonly deploymentConfiguration!: pulumi.Output<types.outputs.DeploymentConfigurationResponse>;
    /**
     * The deployment mode for cluster deployment.
     */
    public readonly deploymentMode!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * DeploymentSetting provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Deployment Status reported from cluster.
     */
    public /*out*/ readonly reportedProperties!: pulumi.Output<types.outputs.ReportedPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DeploymentSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeploymentSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.arcNodeResourceIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'arcNodeResourceIds'");
            }
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.deploymentConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deploymentConfiguration'");
            }
            if ((!args || args.deploymentMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deploymentMode'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["arcNodeResourceIds"] = args ? args.arcNodeResourceIds : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["deploymentConfiguration"] = args ? args.deploymentConfiguration : undefined;
            resourceInputs["deploymentMode"] = args ? args.deploymentMode : undefined;
            resourceInputs["deploymentSettingsName"] = args ? args.deploymentSettingsName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["reportedProperties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["arcNodeResourceIds"] = undefined /*out*/;
            resourceInputs["deploymentConfiguration"] = undefined /*out*/;
            resourceInputs["deploymentMode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["reportedProperties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20230801preview:DeploymentSetting" }, { type: "azure-native:azurestackhci/v20231101preview:DeploymentSetting" }, { type: "azure-native:azurestackhci/v20240101:DeploymentSetting" }, { type: "azure-native:azurestackhci/v20240215preview:DeploymentSetting" }, { type: "azure-native:azurestackhci/v20240401:DeploymentSetting" }, { type: "azure-native:azurestackhci/v20240901preview:DeploymentSetting" }, { type: "azure-native:azurestackhci/v20241201preview:DeploymentSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DeploymentSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DeploymentSetting resource.
 */
export interface DeploymentSettingArgs {
    /**
     * Azure resource ids of Arc machines to be part of cluster.
     */
    arcNodeResourceIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Scale units will contains list of deployment data
     */
    deploymentConfiguration: pulumi.Input<types.inputs.DeploymentConfigurationArgs>;
    /**
     * The deployment mode for cluster deployment.
     */
    deploymentMode: pulumi.Input<string | types.enums.DeploymentMode>;
    /**
     * Name of Deployment Setting
     */
    deploymentSettingsName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}