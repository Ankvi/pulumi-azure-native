import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource for OuContainer.
 *
 * Uses Azure REST API version 2022-12-01. In version 1.x of the Azure Native provider, it used API version 2021-03-01.
 */
export class OuContainer extends pulumi.CustomResource {
    /**
     * Get an existing OuContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OuContainer {
        return new OuContainer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:aad:OuContainer';

    /**
     * Returns true if the given object is an instance of OuContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OuContainer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OuContainer.__pulumiType;
    }

    /**
     * The list of container accounts
     */
    public /*out*/ readonly accounts!: pulumi.Output<types.outputs.ContainerAccountResponse[] | undefined>;
    /**
     * The OuContainer name
     */
    public /*out*/ readonly containerId!: pulumi.Output<string>;
    /**
     * The Deployment id
     */
    public /*out*/ readonly deploymentId!: pulumi.Output<string>;
    /**
     * Distinguished Name of OuContainer instance
     */
    public /*out*/ readonly distinguishedName!: pulumi.Output<string>;
    /**
     * The domain name of Domain Services.
     */
    public /*out*/ readonly domainName!: pulumi.Output<string>;
    /**
     * Resource etag
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    public /*out*/ readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Status of OuContainer instance
     */
    public /*out*/ readonly serviceStatus!: pulumi.Output<string>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure Active Directory tenant id
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a OuContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OuContainerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.domainServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainServiceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["domainServiceName"] = args ? args.domainServiceName : undefined;
            resourceInputs["ouContainerName"] = args ? args.ouContainerName : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["spn"] = args ? args.spn : undefined;
            resourceInputs["accounts"] = undefined /*out*/;
            resourceInputs["containerId"] = undefined /*out*/;
            resourceInputs["deploymentId"] = undefined /*out*/;
            resourceInputs["distinguishedName"] = undefined /*out*/;
            resourceInputs["domainName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accounts"] = undefined /*out*/;
            resourceInputs["containerId"] = undefined /*out*/;
            resourceInputs["deploymentId"] = undefined /*out*/;
            resourceInputs["distinguishedName"] = undefined /*out*/;
            resourceInputs["domainName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:aad/v20170601:OuContainer" }, { type: "azure-native:aad/v20200101:OuContainer" }, { type: "azure-native:aad/v20210301:OuContainer" }, { type: "azure-native:aad/v20210501:OuContainer" }, { type: "azure-native:aad/v20220901:OuContainer" }, { type: "azure-native:aad/v20221201:OuContainer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OuContainer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OuContainer resource.
 */
export interface OuContainerArgs {
    /**
     * The account name
     */
    accountName?: pulumi.Input<string>;
    /**
     * The name of the domain service.
     */
    domainServiceName: pulumi.Input<string>;
    /**
     * The name of the OuContainer.
     */
    ouContainerName?: pulumi.Input<string>;
    /**
     * The account password
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The account spn
     */
    spn?: pulumi.Input<string>;
}