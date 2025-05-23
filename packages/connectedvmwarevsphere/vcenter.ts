import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the vCenter.
 *
 * Uses Azure REST API version 2023-12-01. In version 2.x of the Azure Native provider, it used API version 2022-07-15-preview.
 *
 * Other available API versions: 2022-07-15-preview, 2023-03-01-preview, 2023-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native connectedvmwarevsphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class VCenter extends pulumi.CustomResource {
    /**
     * Get an existing VCenter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VCenter {
        return new VCenter(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:connectedvmwarevsphere:VCenter';

    /**
     * Returns true if the given object is an instance of VCenter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VCenter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VCenter.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the connection status to the vCenter.
     */
    public /*out*/ readonly connectionStatus!: pulumi.Output<string>;
    /**
     * Username / Password Credentials to connect to vcenter.
     */
    public readonly credentials!: pulumi.Output<types.outputs.VICredentialResponse | undefined>;
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    public /*out*/ readonly customResourceName!: pulumi.Output<string>;
    /**
     * Gets or sets the extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Gets or sets the FQDN/IPAddress of the vCenter.
     */
    public readonly fqdn!: pulumi.Output<string>;
    /**
     * Gets or sets the instance UUID of the vCenter.
     */
    public /*out*/ readonly instanceUuid!: pulumi.Output<string>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Gets or sets the name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the port of the vCenter.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * Gets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource status information.
     */
    public /*out*/ readonly statuses!: pulumi.Output<types.outputs.ResourceStatusResponse[]>;
    /**
     * The system data.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Gets or sets the Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets or sets the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets or sets a unique identifier for this resource.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;
    /**
     * Gets or sets the version of the vCenter.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a VCenter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VCenterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.fqdn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fqdn'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["fqdn"] = args ? args.fqdn : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vcenterName"] = args ? args.vcenterName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectionStatus"] = undefined /*out*/;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["instanceUuid"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectionStatus"] = undefined /*out*/;
            resourceInputs["credentials"] = undefined /*out*/;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["instanceUuid"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:connectedvmwarevsphere/v20201001preview:VCenter" }, { type: "azure-native:connectedvmwarevsphere/v20220110preview:VCenter" }, { type: "azure-native:connectedvmwarevsphere/v20220715preview:VCenter" }, { type: "azure-native:connectedvmwarevsphere/v20230301preview:VCenter" }, { type: "azure-native:connectedvmwarevsphere/v20231001:VCenter" }, { type: "azure-native:connectedvmwarevsphere/v20231201:VCenter" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VCenter.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VCenter resource.
 */
export interface VCenterArgs {
    /**
     * Username / Password Credentials to connect to vcenter.
     */
    credentials?: pulumi.Input<types.inputs.VICredentialArgs>;
    /**
     * Gets or sets the extended location.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Gets or sets the FQDN/IPAddress of the vCenter.
     */
    fqdn: pulumi.Input<string>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    kind?: pulumi.Input<string>;
    /**
     * Gets or sets the location.
     */
    location?: pulumi.Input<string>;
    /**
     * Gets or sets the port of the vCenter.
     */
    port?: pulumi.Input<number>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the vCenter.
     */
    vcenterName?: pulumi.Input<string>;
}