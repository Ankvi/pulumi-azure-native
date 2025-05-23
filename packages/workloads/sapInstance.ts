import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the SAP Instance resource.
 *
 * Uses Azure REST API version 2023-10-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-10-01-preview.
 */
export class SapInstance extends pulumi.CustomResource {
    /**
     * Get an existing SapInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SapInstance {
        return new SapInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:workloads:SapInstance';

    /**
     * Returns true if the given object is an instance of SapInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SapInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SapInstance.__pulumiType;
    }

    /**
     * Enter a business function/department identifier to group multiple SIDs.
     */
    public /*out*/ readonly application!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The Environment; PRD, QA, DEV, etc to which SAP system belongs to. Select from the list of available dropdown values.
     */
    public /*out*/ readonly environment!: pulumi.Output<string>;
    /**
     * Defines the errors related to SAP Instance resource.
     */
    public /*out*/ readonly errors!: pulumi.Output<types.outputs.SAPMigrateErrorResponse>;
    /**
     * This is the SID of the production system in a landscape.  An SAP system could itself be a production SID or a part of a landscape with a different Production SID. This field can be used to relate non-prod SIDs, other components, SID (WEBDISP) to the prod SID. Enter the value of Production SID.
     */
    public /*out*/ readonly landscapeSid!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Defines the provisioning states.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * This is the SID of SAP System. Keeping this not equal to ID as different landscapes can have repeated System SID IDs.
     */
    public /*out*/ readonly systemSid!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SapInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SapInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sapDiscoverySiteName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sapDiscoverySiteName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sapDiscoverySiteName"] = args ? args.sapDiscoverySiteName : undefined;
            resourceInputs["sapInstanceName"] = args ? args.sapInstanceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["application"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["environment"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["landscapeSid"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["systemSid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["application"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["environment"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["landscapeSid"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["systemSid"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:workloads/v20231001preview:SapInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SapInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SapInstance resource.
 */
export interface SapInstanceArgs {
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the discovery site resource for SAP Migration.
     */
    sapDiscoverySiteName: pulumi.Input<string>;
    /**
     * The name of SAP Instance resource for SAP Migration.
     */
    sapInstanceName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}