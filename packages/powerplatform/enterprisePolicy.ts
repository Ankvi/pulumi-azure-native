import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of the EnterprisePolicy.
 *
 * Uses Azure REST API version 2020-10-30-preview. In version 2.x of the Azure Native provider, it used API version 2020-10-30-preview.
 */
export class EnterprisePolicy extends pulumi.CustomResource {
    /**
     * Get an existing EnterprisePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EnterprisePolicy {
        return new EnterprisePolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:powerplatform:EnterprisePolicy';

    /**
     * Returns true if the given object is an instance of EnterprisePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnterprisePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnterprisePolicy.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The encryption settings for a configuration store.
     */
    public readonly encryption!: pulumi.Output<types.outputs.PropertiesResponseEncryption | undefined>;
    /**
     * The health status of the resource.
     */
    public readonly healthStatus!: pulumi.Output<string | undefined>;
    /**
     * The identity of the EnterprisePolicy.
     */
    public readonly identity!: pulumi.Output<types.outputs.EnterprisePolicyIdentityResponse | undefined>;
    /**
     * The kind (type) of Enterprise Policy.
     */
    public readonly kind!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Settings concerning lockbox.
     */
    public readonly lockbox!: pulumi.Output<types.outputs.PropertiesResponseLockbox | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Settings concerning network injection.
     */
    public readonly networkInjection!: pulumi.Output<types.outputs.PropertiesResponseNetworkInjection | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The internally assigned unique identifier of the resource.
     */
    public /*out*/ readonly systemId!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a EnterprisePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnterprisePolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["enterprisePolicyName"] = args ? args.enterprisePolicyName : undefined;
            resourceInputs["healthStatus"] = args ? args.healthStatus : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["lockbox"] = args ? args.lockbox : undefined;
            resourceInputs["networkInjection"] = args ? args.networkInjection : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["systemId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["healthStatus"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["lockbox"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInjection"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["systemId"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:powerplatform/v20201030preview:EnterprisePolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EnterprisePolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EnterprisePolicy resource.
 */
export interface EnterprisePolicyArgs {
    /**
     * The encryption settings for a configuration store.
     */
    encryption?: pulumi.Input<types.inputs.PropertiesEncryptionArgs>;
    /**
     * Name of the EnterprisePolicy.
     */
    enterprisePolicyName?: pulumi.Input<string>;
    /**
     * The health status of the resource.
     */
    healthStatus?: pulumi.Input<string | types.enums.HealthStatus>;
    /**
     * The identity of the EnterprisePolicy.
     */
    identity?: pulumi.Input<types.inputs.EnterprisePolicyIdentityArgs>;
    /**
     * The kind (type) of Enterprise Policy.
     */
    kind: pulumi.Input<string | types.enums.EnterprisePolicyKind>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Settings concerning lockbox.
     */
    lockbox?: pulumi.Input<types.inputs.PropertiesLockboxArgs>;
    /**
     * Settings concerning network injection.
     */
    networkInjection?: pulumi.Input<types.inputs.PropertiesNetworkInjectionArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}