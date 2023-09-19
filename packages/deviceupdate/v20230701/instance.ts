import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Device Update instance details.
 */
export class Instance extends pulumi.CustomResource {
    /**
     * Get an existing Instance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Instance {
        return new Instance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:deviceupdate/v20230701:Instance';

    /**
     * Returns true if the given object is an instance of Instance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Instance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Instance.__pulumiType;
    }

    /**
     * Parent Device Update Account name which Instance belongs to.
     */
    public readonly accountName!: pulumi.Output<string>;
    /**
     * Customer-initiated diagnostic log collection storage properties
     */
    public readonly diagnosticStorageProperties!: pulumi.Output<types.outputs.DiagnosticStoragePropertiesResponse | undefined>;
    /**
     * Enables or Disables the diagnostic logs collection
     */
    public readonly enableDiagnostics!: pulumi.Output<boolean | undefined>;
    /**
     * List of IoT Hubs associated with the account.
     */
    public readonly iotHubs!: pulumi.Output<types.outputs.IotHubSettingsResponse[] | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state.
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
     * Create a Instance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["diagnosticStorageProperties"] = args ? args.diagnosticStorageProperties : undefined;
            resourceInputs["enableDiagnostics"] = args ? args.enableDiagnostics : undefined;
            resourceInputs["instanceName"] = args ? args.instanceName : undefined;
            resourceInputs["iotHubs"] = args ? args.iotHubs : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accountName"] = undefined /*out*/;
            resourceInputs["diagnosticStorageProperties"] = undefined /*out*/;
            resourceInputs["enableDiagnostics"] = undefined /*out*/;
            resourceInputs["iotHubs"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:deviceupdate:Instance" }, { type: "azure-native:deviceupdate/v20200301preview:Instance" }, { type: "azure-native:deviceupdate/v20220401preview:Instance" }, { type: "azure-native:deviceupdate/v20221001:Instance" }, { type: "azure-native:deviceupdate/v20221201preview:Instance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Instance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Instance resource.
 */
export interface InstanceArgs {
    /**
     * Account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Customer-initiated diagnostic log collection storage properties
     */
    diagnosticStorageProperties?: pulumi.Input<types.inputs.DiagnosticStoragePropertiesArgs>;
    /**
     * Enables or Disables the diagnostic logs collection
     */
    enableDiagnostics?: pulumi.Input<boolean>;
    /**
     * Instance name.
     */
    instanceName?: pulumi.Input<string>;
    /**
     * List of IoT Hubs associated with the account.
     */
    iotHubs?: pulumi.Input<pulumi.Input<types.inputs.IotHubSettingsArgs>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
