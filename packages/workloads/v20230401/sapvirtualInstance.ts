import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the Virtual Instance for SAP solutions resource.
 */
export class SAPVirtualInstance extends pulumi.CustomResource {
    /**
     * Get an existing SAPVirtualInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SAPVirtualInstance {
        return new SAPVirtualInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:workloads/v20230401:SAPVirtualInstance';

    /**
     * Returns true if the given object is an instance of SAPVirtualInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SAPVirtualInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SAPVirtualInstance.__pulumiType;
    }

    /**
     * Defines if the SAP system is being created using Azure Center for SAP solutions (ACSS) or if an existing SAP system is being registered with ACSS
     */
    public readonly configuration!: pulumi.Output<types.outputs.DeploymentConfigurationResponse | types.outputs.DeploymentWithOSConfigurationResponse | types.outputs.DiscoveryConfigurationResponse>;
    /**
     * Defines the environment type - Production/Non Production.
     */
    public readonly environment!: pulumi.Output<string>;
    /**
     * Indicates any errors on the Virtual Instance for SAP solutions resource.
     */
    public /*out*/ readonly errors!: pulumi.Output<types.outputs.SAPVirtualInstanceErrorResponse>;
    /**
     * Defines the health of SAP Instances.
     */
    public /*out*/ readonly health!: pulumi.Output<string>;
    /**
     * A pre-created user assigned identity with appropriate roles assigned. To learn more on identity and roles required, visit the ACSS how-to-guide.
     */
    public readonly identity!: pulumi.Output<types.outputs.UserAssignedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Managed resource group configuration
     */
    public readonly managedResourceGroupConfiguration!: pulumi.Output<types.outputs.ManagedRGConfigurationResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Defines the provisioning states.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Defines the SAP Product type.
     */
    public readonly sapProduct!: pulumi.Output<string>;
    /**
     * Defines the Virtual Instance for SAP state.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Defines the SAP Instance status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
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
     * Create a SAPVirtualInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SAPVirtualInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.configuration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configuration'");
            }
            if ((!args || args.environment === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environment'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sapProduct === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sapProduct'");
            }
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["environment"] = args ? args.environment : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedResourceGroupConfiguration"] = args ? args.managedResourceGroupConfiguration : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sapProduct"] = args ? args.sapProduct : undefined;
            resourceInputs["sapVirtualInstanceName"] = args ? args.sapVirtualInstanceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["health"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["configuration"] = undefined /*out*/;
            resourceInputs["environment"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["health"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedResourceGroupConfiguration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sapProduct"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:workloads:SAPVirtualInstance" }, { type: "azure-native:workloads/v20211201preview:SAPVirtualInstance" }, { type: "azure-native:workloads/v20221101preview:SAPVirtualInstance" }, { type: "azure-native:workloads/v20231001preview:SAPVirtualInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SAPVirtualInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SAPVirtualInstance resource.
 */
export interface SAPVirtualInstanceArgs {
    /**
     * Defines if the SAP system is being created using Azure Center for SAP solutions (ACSS) or if an existing SAP system is being registered with ACSS
     */
    configuration: pulumi.Input<types.inputs.DeploymentConfigurationArgs | types.inputs.DeploymentWithOSConfigurationArgs | types.inputs.DiscoveryConfigurationArgs>;
    /**
     * Defines the environment type - Production/Non Production.
     */
    environment: pulumi.Input<string | types.enums.SAPEnvironmentType>;
    /**
     * A pre-created user assigned identity with appropriate roles assigned. To learn more on identity and roles required, visit the ACSS how-to-guide.
     */
    identity?: pulumi.Input<types.inputs.UserAssignedServiceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Managed resource group configuration
     */
    managedResourceGroupConfiguration?: pulumi.Input<types.inputs.ManagedRGConfigurationArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Defines the SAP Product type.
     */
    sapProduct: pulumi.Input<string | types.enums.SAPProductType>;
    /**
     * The name of the Virtual Instances for SAP solutions resource
     */
    sapVirtualInstanceName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}