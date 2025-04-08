import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The application resource.
 *
 * Uses Azure REST API version 2024-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-11-01-preview.
 */
export class Application extends pulumi.CustomResource {
    /**
     * Get an existing Application resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Application {
        return new Application(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicefabric:Application';

    /**
     * Returns true if the given object is an instance of Application.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Application {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Application.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Describes the managed identities for an Azure resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * List of user assigned identities for the application, each mapped to a friendly name.
     */
    public readonly managedIdentities!: pulumi.Output<types.outputs.ApplicationUserAssignedIdentityResponse[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of application parameters with overridden values from their default values specified in the application manifest.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The current deployment or provisioning state, which only appears in the response
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
     * Describes the policy for a monitored application upgrade.
     */
    public readonly upgradePolicy!: pulumi.Output<types.outputs.ApplicationUpgradePolicyResponse | undefined>;
    /**
     * The version of the application type as defined in the application manifest.
     * This name must be the full Arm Resource ID for the referenced application type version.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Application resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationName"] = args ? args.applicationName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedIdentities"] = args ? args.managedIdentities : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["upgradePolicy"] = args ? args.upgradePolicy : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedIdentities"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradePolicy"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabric/v20210101preview:Application" }, { type: "azure-native:servicefabric/v20210501:Application" }, { type: "azure-native:servicefabric/v20210601:Application" }, { type: "azure-native:servicefabric/v20210701preview:Application" }, { type: "azure-native:servicefabric/v20210901privatepreview:Application" }, { type: "azure-native:servicefabric/v20211101preview:Application" }, { type: "azure-native:servicefabric/v20220101:Application" }, { type: "azure-native:servicefabric/v20220201preview:Application" }, { type: "azure-native:servicefabric/v20220601preview:Application" }, { type: "azure-native:servicefabric/v20220801preview:Application" }, { type: "azure-native:servicefabric/v20221001preview:Application" }, { type: "azure-native:servicefabric/v20230201preview:Application" }, { type: "azure-native:servicefabric/v20230301preview:Application" }, { type: "azure-native:servicefabric/v20230301preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20230701preview:Application" }, { type: "azure-native:servicefabric/v20230701preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20230901preview:Application" }, { type: "azure-native:servicefabric/v20230901preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20231101preview:Application" }, { type: "azure-native:servicefabric/v20231101preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20231201preview:Application" }, { type: "azure-native:servicefabric/v20231201preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20240201preview:Application" }, { type: "azure-native:servicefabric/v20240201preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20240401:Application" }, { type: "azure-native:servicefabric/v20240401:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20240601preview:Application" }, { type: "azure-native:servicefabric/v20240601preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20240901preview:Application" }, { type: "azure-native:servicefabric/v20240901preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20241101preview:Application" }, { type: "azure-native:servicefabric:ManagedClusterApplication" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Application.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * The name of the application resource.
     */
    applicationName?: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Describes the managed identities for an Azure resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * List of user assigned identities for the application, each mapped to a friendly name.
     */
    managedIdentities?: pulumi.Input<pulumi.Input<types.inputs.ApplicationUserAssignedIdentityArgs>[]>;
    /**
     * List of application parameters with overridden values from their default values specified in the application manifest.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Describes the policy for a monitored application upgrade.
     */
    upgradePolicy?: pulumi.Input<types.inputs.ApplicationUpgradePolicyArgs>;
    /**
     * The version of the application type as defined in the application manifest.
     * This name must be the full Arm Resource ID for the referenced application type version.
     */
    version?: pulumi.Input<string>;
}