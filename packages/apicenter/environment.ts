import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Environment entity.
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2024-03-15-preview.
 */
export class Environment extends pulumi.CustomResource {
    /**
     * Get an existing Environment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Environment {
        return new Environment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apicenter:Environment';

    /**
     * Returns true if the given object is an instance of Environment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Environment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Environment.__pulumiType;
    }

    /**
     * The custom metadata defined for API catalog entities.
     */
    public readonly customProperties!: pulumi.Output<any | undefined>;
    /**
     * The environment description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Environment kind.
     */
    public readonly kind!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Environment onboarding information
     */
    public readonly onboarding!: pulumi.Output<types.outputs.OnboardingResponse | undefined>;
    /**
     * Server information of the environment.
     */
    public readonly server!: pulumi.Output<types.outputs.EnvironmentServerResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Environment title.
     */
    public readonly title!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Environment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["customProperties"] = args ? args.customProperties : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["onboarding"] = args ? args.onboarding : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["customProperties"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["onboarding"] = undefined /*out*/;
            resourceInputs["server"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apicenter/v20240301:Environment" }, { type: "azure-native:apicenter/v20240315preview:Environment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Environment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Environment resource.
 */
export interface EnvironmentArgs {
    /**
     * The custom metadata defined for API catalog entities.
     */
    customProperties?: any;
    /**
     * The environment description.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the environment.
     */
    environmentName?: pulumi.Input<string>;
    /**
     * Environment kind.
     */
    kind: pulumi.Input<string | types.enums.EnvironmentKind>;
    /**
     * Environment onboarding information
     */
    onboarding?: pulumi.Input<types.inputs.OnboardingArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Server information of the environment.
     */
    server?: pulumi.Input<types.inputs.EnvironmentServerArgs>;
    /**
     * The name of Azure API Center service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Environment title.
     */
    title: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}