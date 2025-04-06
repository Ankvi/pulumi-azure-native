import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A hostname binding object.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class WebAppHostNameBindingSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppHostNameBindingSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppHostNameBindingSlot {
        return new WebAppHostNameBindingSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppHostNameBindingSlot';

    /**
     * Returns true if the given object is an instance of WebAppHostNameBindingSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppHostNameBindingSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppHostNameBindingSlot.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Azure resource name.
     */
    public readonly azureResourceName!: pulumi.Output<string | undefined>;
    /**
     * Azure resource type.
     */
    public readonly azureResourceType!: pulumi.Output<string | undefined>;
    /**
     * Custom DNS record type.
     */
    public readonly customHostNameDnsRecordType!: pulumi.Output<string | undefined>;
    /**
     * Fully qualified ARM domain resource URI.
     */
    public readonly domainId!: pulumi.Output<string | undefined>;
    /**
     * Hostname type.
     */
    public readonly hostNameType!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * App Service app name.
     */
    public readonly siteName!: pulumi.Output<string | undefined>;
    /**
     * SSL type
     */
    public readonly sslState!: pulumi.Output<string | undefined>;
    /**
     * SSL certificate thumbprint
     */
    public readonly thumbprint!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Virtual IP address assigned to the hostname if IP based SSL is enabled.
     */
    public /*out*/ readonly virtualIP!: pulumi.Output<string>;

    /**
     * Create a WebAppHostNameBindingSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppHostNameBindingSlotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.slot === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slot'");
            }
            resourceInputs["azureResourceName"] = args ? args.azureResourceName : undefined;
            resourceInputs["azureResourceType"] = args ? args.azureResourceType : undefined;
            resourceInputs["customHostNameDnsRecordType"] = args ? args.customHostNameDnsRecordType : undefined;
            resourceInputs["domainId"] = args ? args.domainId : undefined;
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["hostNameType"] = args ? args.hostNameType : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["siteName"] = args ? args.siteName : undefined;
            resourceInputs["slot"] = args ? args.slot : undefined;
            resourceInputs["sslState"] = args ? args.sslState : undefined;
            resourceInputs["thumbprint"] = args ? args.thumbprint : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualIP"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["azureResourceName"] = undefined /*out*/;
            resourceInputs["azureResourceType"] = undefined /*out*/;
            resourceInputs["customHostNameDnsRecordType"] = undefined /*out*/;
            resourceInputs["domainId"] = undefined /*out*/;
            resourceInputs["hostNameType"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["siteName"] = undefined /*out*/;
            resourceInputs["sslState"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualIP"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20150801:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20160801:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20180201:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20181101:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20190801:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20200601:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20200901:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20201001:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20201201:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20210101:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20210115:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20210201:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20210301:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20220301:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20220901:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20230101:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20231201:WebAppHostNameBindingSlot" }, { type: "azure-native:web/v20240401:WebAppHostNameBindingSlot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppHostNameBindingSlot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppHostNameBindingSlot resource.
 */
export interface WebAppHostNameBindingSlotArgs {
    /**
     * Azure resource name.
     */
    azureResourceName?: pulumi.Input<string>;
    /**
     * Azure resource type.
     */
    azureResourceType?: pulumi.Input<types.enums.AzureResourceType>;
    /**
     * Custom DNS record type.
     */
    customHostNameDnsRecordType?: pulumi.Input<types.enums.CustomHostNameDnsRecordType>;
    /**
     * Fully qualified ARM domain resource URI.
     */
    domainId?: pulumi.Input<string>;
    /**
     * Hostname in the hostname binding.
     */
    hostName?: pulumi.Input<string>;
    /**
     * Hostname type.
     */
    hostNameType?: pulumi.Input<types.enums.HostNameType>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * App Service app name.
     */
    siteName?: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will create a binding for the production slot.
     */
    slot: pulumi.Input<string>;
    /**
     * SSL type
     */
    sslState?: pulumi.Input<types.enums.SslState>;
    /**
     * SSL certificate thumbprint
     */
    thumbprint?: pulumi.Input<string>;
}