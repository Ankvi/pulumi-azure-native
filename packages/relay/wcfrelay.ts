import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of the WCF relay resource.
 *
 * Uses Azure REST API version 2024-01-01. In version 2.x of the Azure Native provider, it used API version 2021-11-01.
 *
 * Other available API versions: 2021-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native relay [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class WCFRelay extends pulumi.CustomResource {
    /**
     * Get an existing WCFRelay resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WCFRelay {
        return new WCFRelay(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:relay:WCFRelay';

    /**
     * Returns true if the given object is an instance of WCFRelay.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WCFRelay {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WCFRelay.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The time the WCF relay was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Returns true if the relay is dynamic; otherwise, false.
     */
    public /*out*/ readonly isDynamic!: pulumi.Output<boolean>;
    /**
     * The number of listeners for this relay. Note that min :1 and max:25 are supported.
     */
    public /*out*/ readonly listenerCount!: pulumi.Output<number>;
    /**
     * The geo-location where the resource lives
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * WCF relay type.
     */
    public readonly relayType!: pulumi.Output<string | undefined>;
    /**
     * Returns true if client authorization is needed for this relay; otherwise, false.
     */
    public readonly requiresClientAuthorization!: pulumi.Output<boolean | undefined>;
    /**
     * Returns true if transport security is needed for this relay; otherwise, false.
     */
    public readonly requiresTransportSecurity!: pulumi.Output<boolean | undefined>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The time the namespace was updated.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * The usermetadata is a placeholder to store user-defined string data for the WCF Relay endpoint. For example, it can be used to store descriptive data, such as list of teams and their contact information. Also, user-defined configuration settings can be stored.
     */
    public readonly userMetadata!: pulumi.Output<string | undefined>;

    /**
     * Create a WCFRelay resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WCFRelayArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["relayName"] = args ? args.relayName : undefined;
            resourceInputs["relayType"] = args ? args.relayType : undefined;
            resourceInputs["requiresClientAuthorization"] = args ? args.requiresClientAuthorization : undefined;
            resourceInputs["requiresTransportSecurity"] = args ? args.requiresTransportSecurity : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["userMetadata"] = args ? args.userMetadata : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["isDynamic"] = undefined /*out*/;
            resourceInputs["listenerCount"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["isDynamic"] = undefined /*out*/;
            resourceInputs["listenerCount"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["relayType"] = undefined /*out*/;
            resourceInputs["requiresClientAuthorization"] = undefined /*out*/;
            resourceInputs["requiresTransportSecurity"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
            resourceInputs["userMetadata"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:relay/v20160701:WCFRelay" }, { type: "azure-native:relay/v20170401:WCFRelay" }, { type: "azure-native:relay/v20211101:WCFRelay" }, { type: "azure-native:relay/v20240101:WCFRelay" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WCFRelay.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WCFRelay resource.
 */
export interface WCFRelayArgs {
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The relay name.
     */
    relayName?: pulumi.Input<string>;
    /**
     * WCF relay type.
     */
    relayType?: pulumi.Input<types.enums.Relaytype>;
    /**
     * Returns true if client authorization is needed for this relay; otherwise, false.
     */
    requiresClientAuthorization?: pulumi.Input<boolean>;
    /**
     * Returns true if transport security is needed for this relay; otherwise, false.
     */
    requiresTransportSecurity?: pulumi.Input<boolean>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The usermetadata is a placeholder to store user-defined string data for the WCF Relay endpoint. For example, it can be used to store descriptive data, such as list of teams and their contact information. Also, user-defined configuration settings can be stored.
     */
    userMetadata?: pulumi.Input<string>;
}