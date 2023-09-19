import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Appliances definition.
 */
export class Appliance extends pulumi.CustomResource {
    /**
     * Get an existing Appliance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Appliance {
        return new Appliance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:resourceconnector/v20221027:Appliance';

    /**
     * Returns true if the given object is an instance of Appliance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Appliance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Appliance.__pulumiType;
    }

    /**
     * Represents a supported Fabric/Infra. (AKSEdge etc...).
     */
    public readonly distro!: pulumi.Output<string | undefined>;
    /**
     * Identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * Contains infrastructure information about the Appliance
     */
    public readonly infrastructureConfig!: pulumi.Output<types.outputs.AppliancePropertiesResponseInfrastructureConfig | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Certificates pair used to download MSI certificate from HIS. Can only be set once.
     */
    public readonly publicKey!: pulumi.Output<string | undefined>;
    /**
     * Appliance’s health and state of connection to on-prem
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
     * Version of the Appliance
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Appliance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplianceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["distro"] = (args ? args.distro : undefined) ?? "AKSEdge";
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["infrastructureConfig"] = args ? args.infrastructureConfig : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["publicKey"] = args ? args.publicKey : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["distro"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["infrastructureConfig"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicKey"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:resourceconnector:Appliance" }, { type: "azure-native:resourceconnector/v20211031preview:Appliance" }, { type: "azure-native:resourceconnector/v20220415preview:Appliance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Appliance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Appliance resource.
 */
export interface ApplianceArgs {
    /**
     * Represents a supported Fabric/Infra. (AKSEdge etc...).
     */
    distro?: pulumi.Input<string | types.enums.Distro>;
    /**
     * Identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * Contains infrastructure information about the Appliance
     */
    infrastructureConfig?: pulumi.Input<types.inputs.AppliancePropertiesInfrastructureConfigArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Certificates pair used to download MSI certificate from HIS. Can only be set once.
     */
    publicKey?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Appliances name.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Version of the Appliance
     */
    version?: pulumi.Input<string>;
}
