import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Registration information.
 *
 * Uses Azure REST API version 2022-06-01. In version 2.x of the Azure Native provider, it used API version 2022-06-01.
 *
 * Other available API versions: 2020-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestack [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Registration extends pulumi.CustomResource {
    /**
     * Get an existing Registration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Registration {
        return new Registration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestack:Registration';

    /**
     * Returns true if the given object is an instance of Registration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Registration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Registration.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Specifies the billing mode for the Azure Stack registration.
     */
    public /*out*/ readonly billingModel!: pulumi.Output<string | undefined>;
    /**
     * The identifier of the registered Azure Stack.
     */
    public /*out*/ readonly cloudId!: pulumi.Output<string | undefined>;
    /**
     * The entity tag used for optimistic concurrency when modifying the resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The object identifier associated with the Azure Stack connecting to Azure.
     */
    public /*out*/ readonly objectId!: pulumi.Output<string | undefined>;
    /**
     * Custom tags for the resource.
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of Resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Registration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistrationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.registrationToken === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registrationToken'");
            }
            if ((!args || args.resourceGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroup'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["registrationName"] = args ? args.registrationName : undefined;
            resourceInputs["registrationToken"] = args ? args.registrationToken : undefined;
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["billingModel"] = undefined /*out*/;
            resourceInputs["cloudId"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["billingModel"] = undefined /*out*/;
            resourceInputs["cloudId"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestack/v20160101:Registration" }, { type: "azure-native:azurestack/v20170601:Registration" }, { type: "azure-native:azurestack/v20200601preview:Registration" }, { type: "azure-native:azurestack/v20220601:Registration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Registration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Registration resource.
 */
export interface RegistrationArgs {
    /**
     * Location of the resource.
     */
    location?: pulumi.Input<string | types.enums.Location>;
    /**
     * Name of the Azure Stack registration.
     */
    registrationName?: pulumi.Input<string>;
    /**
     * The token identifying registered Azure Stack
     */
    registrationToken: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroup: pulumi.Input<string>;
}