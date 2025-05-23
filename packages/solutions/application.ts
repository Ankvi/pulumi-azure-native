import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Information about managed application.
 *
 * Uses Azure REST API version 2021-07-01. In version 2.x of the Azure Native provider, it used API version 2021-07-01.
 *
 * Other available API versions: 2023-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native solutions [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Application extends pulumi.CustomResource {
    /**
     * Get an existing Application resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Application {
        return new Application(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:solutions:Application';

    /**
     * Returns true if the given object is an instance of Application.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Application {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Application.__pulumiType;
    }

    /**
     * The fully qualified path of managed application definition Id.
     */
    public readonly applicationDefinitionId!: pulumi.Output<string | undefined>;
    /**
     * The collection of managed application artifacts.
     */
    public /*out*/ readonly artifacts!: pulumi.Output<types.outputs.ApplicationArtifactResponse[]>;
    /**
     * The  read-only authorizations property that is retrieved from the application package.
     */
    public /*out*/ readonly authorizations!: pulumi.Output<types.outputs.ApplicationAuthorizationResponse[]>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The managed application billing details.
     */
    public /*out*/ readonly billingDetails!: pulumi.Output<types.outputs.ApplicationBillingDetailsDefinitionResponse>;
    /**
     * The client entity that created the JIT request.
     */
    public /*out*/ readonly createdBy!: pulumi.Output<types.outputs.ApplicationClientDetailsResponse>;
    /**
     * The read-only customer support property that is retrieved from the application package.
     */
    public /*out*/ readonly customerSupport!: pulumi.Output<types.outputs.ApplicationPackageContactResponse>;
    /**
     * The identity of the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The managed application Jit access policy.
     */
    public readonly jitAccessPolicy!: pulumi.Output<types.outputs.ApplicationJitAccessPolicyResponse | undefined>;
    /**
     * The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
     */
    public readonly kind!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * ID of the resource that manages this resource.
     */
    public readonly managedBy!: pulumi.Output<string | undefined>;
    /**
     * The managed resource group Id.
     */
    public readonly managedResourceGroupId!: pulumi.Output<string | undefined>;
    /**
     * The managed application management mode.
     */
    public /*out*/ readonly managementMode!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Name and value pairs that define the managed application outputs.
     */
    public /*out*/ readonly outputs!: pulumi.Output<any>;
    /**
     * Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
     */
    public readonly parameters!: pulumi.Output<any | undefined>;
    /**
     * The plan information.
     */
    public readonly plan!: pulumi.Output<types.outputs.PlanResponse | undefined>;
    /**
     * The managed application provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The publisher tenant Id.
     */
    public /*out*/ readonly publisherTenantId!: pulumi.Output<string>;
    /**
     * The SKU of the resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The read-only support URLs property that is retrieved from the application package.
     */
    public /*out*/ readonly supportUrls!: pulumi.Output<types.outputs.ApplicationPackageSupportUrlsResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The client entity that last updated the JIT request.
     */
    public /*out*/ readonly updatedBy!: pulumi.Output<types.outputs.ApplicationClientDetailsResponse>;

    /**
     * Create a Application resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationDefinitionId"] = args ? args.applicationDefinitionId : undefined;
            resourceInputs["applicationName"] = args ? args.applicationName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["jitAccessPolicy"] = args ? args.jitAccessPolicy : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedBy"] = args ? args.managedBy : undefined;
            resourceInputs["managedResourceGroupId"] = args ? args.managedResourceGroupId : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["artifacts"] = undefined /*out*/;
            resourceInputs["authorizations"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["billingDetails"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["customerSupport"] = undefined /*out*/;
            resourceInputs["managementMode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outputs"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publisherTenantId"] = undefined /*out*/;
            resourceInputs["supportUrls"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
        } else {
            resourceInputs["applicationDefinitionId"] = undefined /*out*/;
            resourceInputs["artifacts"] = undefined /*out*/;
            resourceInputs["authorizations"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["billingDetails"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["customerSupport"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["jitAccessPolicy"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["managedResourceGroupId"] = undefined /*out*/;
            resourceInputs["managementMode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outputs"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publisherTenantId"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["supportUrls"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:solutions/v20160901preview:Application" }, { type: "azure-native:solutions/v20170901:Application" }, { type: "azure-native:solutions/v20171201:Application" }, { type: "azure-native:solutions/v20180201:Application" }, { type: "azure-native:solutions/v20180301:Application" }, { type: "azure-native:solutions/v20180601:Application" }, { type: "azure-native:solutions/v20180901preview:Application" }, { type: "azure-native:solutions/v20190701:Application" }, { type: "azure-native:solutions/v20200821preview:Application" }, { type: "azure-native:solutions/v20210201preview:Application" }, { type: "azure-native:solutions/v20210701:Application" }, { type: "azure-native:solutions/v20231201preview:Application" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Application.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * The fully qualified path of managed application definition Id.
     */
    applicationDefinitionId?: pulumi.Input<string>;
    /**
     * The name of the managed application.
     */
    applicationName?: pulumi.Input<string>;
    /**
     * The identity of the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The managed application Jit access policy.
     */
    jitAccessPolicy?: pulumi.Input<types.inputs.ApplicationJitAccessPolicyArgs>;
    /**
     * The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
     */
    kind: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * ID of the resource that manages this resource.
     */
    managedBy?: pulumi.Input<string>;
    /**
     * The managed resource group Id.
     */
    managedResourceGroupId?: pulumi.Input<string>;
    /**
     * Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
     */
    parameters?: any;
    /**
     * The plan information.
     */
    plan?: pulumi.Input<types.inputs.PlanArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the resource.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}