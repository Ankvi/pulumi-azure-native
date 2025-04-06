import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Custom Locations definition.
 *
 * Uses Azure REST API version 2021-08-31-preview. In version 2.x of the Azure Native provider, it used API version 2021-08-15.
 *
 * Other available API versions: 2021-08-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native extendedlocation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class CustomLocation extends pulumi.CustomResource {
    /**
     * Get an existing CustomLocation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomLocation {
        return new CustomLocation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:extendedlocation:CustomLocation';

    /**
     * Returns true if the given object is an instance of CustomLocation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomLocation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomLocation.__pulumiType;
    }

    /**
     * This is optional input that contains the authentication that should be used to generate the namespace.
     */
    public readonly authentication!: pulumi.Output<types.outputs.CustomLocationPropertiesResponseAuthentication | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Contains the reference to the add-on that contains charts to deploy CRDs and operators.
     */
    public readonly clusterExtensionIds!: pulumi.Output<string[] | undefined>;
    /**
     * Display name for the Custom Locations location.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Connected Cluster or AKS Cluster. The Custom Locations RP will perform a checkAccess API for listAdminCredentials permissions.
     */
    public readonly hostResourceId!: pulumi.Output<string | undefined>;
    /**
     * Type of host the Custom Locations is referencing (Kubernetes, etc...).
     */
    public readonly hostType!: pulumi.Output<string | undefined>;
    /**
     * Identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Kubernetes namespace that will be created on the specified cluster.
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Provisioning State for the Custom Location.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource
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
     * Create a CustomLocation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomLocationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["clusterExtensionIds"] = args ? args.clusterExtensionIds : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["hostResourceId"] = args ? args.hostResourceId : undefined;
            resourceInputs["hostType"] = args ? args.hostType : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authentication"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterExtensionIds"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["hostResourceId"] = undefined /*out*/;
            resourceInputs["hostType"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["namespace"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:extendedlocation/v20210315preview:CustomLocation" }, { type: "azure-native:extendedlocation/v20210815:CustomLocation" }, { type: "azure-native:extendedlocation/v20210831preview:CustomLocation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CustomLocation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CustomLocation resource.
 */
export interface CustomLocationArgs {
    /**
     * This is optional input that contains the authentication that should be used to generate the namespace.
     */
    authentication?: pulumi.Input<types.inputs.CustomLocationPropertiesAuthenticationArgs>;
    /**
     * Contains the reference to the add-on that contains charts to deploy CRDs and operators.
     */
    clusterExtensionIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Display name for the Custom Locations location.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Connected Cluster or AKS Cluster. The Custom Locations RP will perform a checkAccess API for listAdminCredentials permissions.
     */
    hostResourceId?: pulumi.Input<string>;
    /**
     * Type of host the Custom Locations is referencing (Kubernetes, etc...).
     */
    hostType?: pulumi.Input<string | types.enums.HostType>;
    /**
     * Identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Kubernetes namespace that will be created on the specified cluster.
     */
    namespace?: pulumi.Input<string>;
    /**
     * Provisioning State for the Custom Location.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Custom Locations name.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}