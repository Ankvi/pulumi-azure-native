import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A domain specific resource identifier.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class WebAppDomainOwnershipIdentifier extends pulumi.CustomResource {
    /**
     * Get an existing WebAppDomainOwnershipIdentifier resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppDomainOwnershipIdentifier {
        return new WebAppDomainOwnershipIdentifier(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppDomainOwnershipIdentifier';

    /**
     * Returns true if the given object is an instance of WebAppDomainOwnershipIdentifier.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppDomainOwnershipIdentifier {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppDomainOwnershipIdentifier.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * String representation of the identity.
     */
    public readonly value!: pulumi.Output<string | undefined>;

    /**
     * Create a WebAppDomainOwnershipIdentifier resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppDomainOwnershipIdentifierArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["domainOwnershipIdentifierName"] = args ? args.domainOwnershipIdentifierName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["value"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20160801:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20180201:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20181101:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20190801:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20200601:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20200901:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20201001:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20201201:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20210101:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20210115:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20210201:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20210301:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20220301:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20220901:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20230101:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20231201:WebAppDomainOwnershipIdentifier" }, { type: "azure-native:web/v20240401:WebAppDomainOwnershipIdentifier" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppDomainOwnershipIdentifier.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppDomainOwnershipIdentifier resource.
 */
export interface WebAppDomainOwnershipIdentifierArgs {
    /**
     * Name of domain ownership identifier.
     */
    domainOwnershipIdentifierName?: pulumi.Input<string>;
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
     * String representation of the identity.
     */
    value?: pulumi.Input<string>;
}