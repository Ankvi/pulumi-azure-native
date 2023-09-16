import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * This type describes an application resource.
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
    public static readonly __pulumiType = 'azure-native:servicefabricmesh/v20180901preview:Application';

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
     * Internal - used by Visual Studio to setup the debugging session on the local development environment.
     */
    public readonly debugParams!: pulumi.Output<string | undefined>;
    /**
     * User readable description of the application.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Describes the diagnostics definition and usage for an application resource.
     */
    public readonly diagnostics!: pulumi.Output<types.outputs.servicefabricmesh.v20180901preview.DiagnosticsDescriptionResponse | undefined>;
    /**
     * Describes the health state of an application resource.
     */
    public /*out*/ readonly healthState!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * State of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Names of the services in the application.
     */
    public /*out*/ readonly serviceNames!: pulumi.Output<string[]>;
    /**
     * Describes the services in the application. This property is used to create or modify services of the application. On get only the name of the service is returned. The service description can be obtained by querying for the service resource.
     */
    public readonly services!: pulumi.Output<types.outputs.servicefabricmesh.v20180901preview.ServiceResourceDescriptionResponse[] | undefined>;
    /**
     * Status of the application.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Gives additional information about the current status of the application.
     */
    public /*out*/ readonly statusDetails!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * When the application's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the application is marked unhealthy.
     */
    public /*out*/ readonly unhealthyEvaluation!: pulumi.Output<string>;

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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationResourceName"] = args ? args.applicationResourceName : undefined;
            resourceInputs["debugParams"] = args ? args.debugParams : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["diagnostics"] = args ? args.diagnostics : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["services"] = args ? args.services : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["healthState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceNames"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusDetails"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["unhealthyEvaluation"] = undefined /*out*/;
        } else {
            resourceInputs["debugParams"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["diagnostics"] = undefined /*out*/;
            resourceInputs["healthState"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceNames"] = undefined /*out*/;
            resourceInputs["services"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusDetails"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["unhealthyEvaluation"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabricmesh:Application" }, { type: "azure-native:servicefabricmesh/v20180701preview:Application" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Application.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * The identity of the application.
     */
    applicationResourceName?: pulumi.Input<string>;
    /**
     * Internal - used by Visual Studio to setup the debugging session on the local development environment.
     */
    debugParams?: pulumi.Input<string>;
    /**
     * User readable description of the application.
     */
    description?: pulumi.Input<string>;
    /**
     * Describes the diagnostics definition and usage for an application resource.
     */
    diagnostics?: pulumi.Input<types.inputs.servicefabricmesh.v20180901preview.DiagnosticsDescriptionArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Azure resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Describes the services in the application. This property is used to create or modify services of the application. On get only the name of the service is returned. The service description can be obtained by querying for the service resource.
     */
    services?: pulumi.Input<pulumi.Input<types.inputs.servicefabricmesh.v20180901preview.ServiceResourceDescriptionArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
