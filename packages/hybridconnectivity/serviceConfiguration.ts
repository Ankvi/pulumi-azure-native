import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The service configuration details associated with the target resource.
 *
 * Uses Azure REST API version 2023-03-15.
 *
 * Other available API versions: 2024-12-01.
 */
export class ServiceConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing ServiceConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServiceConfiguration {
        return new ServiceConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridconnectivity:ServiceConfiguration';

    /**
     * Returns true if the given object is an instance of ServiceConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceConfiguration.__pulumiType;
    }

    /**
     * The timestamp of resource creation (UTC).
     */
    public readonly createdAt!: pulumi.Output<string | undefined>;
    /**
     * The identity that created the resource.
     */
    public readonly createdBy!: pulumi.Output<string | undefined>;
    /**
     * The type of identity that created the resource.
     */
    public readonly createdByType!: pulumi.Output<string | undefined>;
    /**
     * The timestamp of resource last modification (UTC)
     */
    public readonly lastModifiedAt!: pulumi.Output<string | undefined>;
    /**
     * The identity that last modified the resource.
     */
    public readonly lastModifiedBy!: pulumi.Output<string | undefined>;
    /**
     * The type of identity that last modified the resource.
     */
    public readonly lastModifiedByType!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The port on which service is enabled.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * The resource provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource Id of the connectivity endpoint (optional).
     */
    public readonly resourceId!: pulumi.Output<string | undefined>;
    /**
     * Name of the service.
     */
    public readonly serviceName!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServiceConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.endpointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpointName'");
            }
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["createdAt"] = args ? args.createdAt : undefined;
            resourceInputs["createdBy"] = args ? args.createdBy : undefined;
            resourceInputs["createdByType"] = args ? args.createdByType : undefined;
            resourceInputs["endpointName"] = args ? args.endpointName : undefined;
            resourceInputs["lastModifiedAt"] = args ? args.lastModifiedAt : undefined;
            resourceInputs["lastModifiedBy"] = args ? args.lastModifiedBy : undefined;
            resourceInputs["lastModifiedByType"] = args ? args.lastModifiedByType : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["serviceConfigurationName"] = args ? args.serviceConfigurationName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdByType"] = undefined /*out*/;
            resourceInputs["lastModifiedAt"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedByType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceId"] = undefined /*out*/;
            resourceInputs["serviceName"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridconnectivity/v20230315:ServiceConfiguration" }, { type: "azure-native:hybridconnectivity/v20241201:ServiceConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServiceConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServiceConfiguration resource.
 */
export interface ServiceConfigurationArgs {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The identity that created the resource.
     */
    createdBy?: pulumi.Input<string>;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: pulumi.Input<string | types.enums.CreatedByType>;
    /**
     * The endpoint name.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: pulumi.Input<string>;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: pulumi.Input<string>;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: pulumi.Input<string | types.enums.CreatedByType>;
    /**
     * The port on which service is enabled.
     */
    port?: pulumi.Input<number>;
    /**
     * The resource Id of the connectivity endpoint (optional).
     */
    resourceId?: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * The service name.
     */
    serviceConfigurationName?: pulumi.Input<string>;
    /**
     * Name of the service.
     */
    serviceName: pulumi.Input<string | types.enums.ServiceName>;
}