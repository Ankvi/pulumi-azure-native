import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A job agent private endpoint.
 */
export class JobPrivateEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing JobPrivateEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobPrivateEndpoint {
        return new JobPrivateEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20230501preview:JobPrivateEndpoint';

    /**
     * Returns true if the given object is an instance of JobPrivateEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JobPrivateEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JobPrivateEndpoint.__pulumiType;
    }

    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Private endpoint id of the private endpoint.
     */
    public /*out*/ readonly privateEndpointId!: pulumi.Output<string>;
    /**
     * ARM resource id of the server the private endpoint will target.
     */
    public readonly targetServerAzureResourceId!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a JobPrivateEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobPrivateEndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.jobAgentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jobAgentName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.targetServerAzureResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetServerAzureResourceId'");
            }
            resourceInputs["jobAgentName"] = args ? args.jobAgentName : undefined;
            resourceInputs["privateEndpointName"] = args ? args.privateEndpointName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["targetServerAzureResourceId"] = args ? args.targetServerAzureResourceId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointId"] = undefined /*out*/;
            resourceInputs["targetServerAzureResourceId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:JobPrivateEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(JobPrivateEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a JobPrivateEndpoint resource.
 */
export interface JobPrivateEndpointArgs {
    /**
     * The name of the job agent.
     */
    jobAgentName: pulumi.Input<string>;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * ARM resource id of the server the private endpoint will target.
     */
    targetServerAzureResourceId: pulumi.Input<string>;
}
