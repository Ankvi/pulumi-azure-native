import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The registration definition.
 */
export class RegistrationDefinition extends pulumi.CustomResource {
    /**
     * Get an existing RegistrationDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegistrationDefinition {
        return new RegistrationDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managedservices/v20221001:RegistrationDefinition';

    /**
     * Returns true if the given object is an instance of RegistrationDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RegistrationDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegistrationDefinition.__pulumiType;
    }

    /**
     * The name of the registration definition.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The details for the Managed Services offer’s plan in Azure Marketplace.
     */
    public readonly plan!: pulumi.Output<types.outputs.managedservices.v20221001.PlanResponse | undefined>;
    /**
     * The properties of a registration definition.
     */
    public readonly properties!: pulumi.Output<types.outputs.managedservices.v20221001.RegistrationDefinitionPropertiesResponse>;
    /**
     * The metadata for the registration assignment resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.managedservices.v20221001.SystemDataResponse>;
    /**
     * The type of the Azure resource (Microsoft.ManagedServices/registrationDefinitions).
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RegistrationDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistrationDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["registrationDefinitionId"] = args ? args.registrationDefinitionId : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managedservices:RegistrationDefinition" }, { type: "azure-native:managedservices/v20180601preview:RegistrationDefinition" }, { type: "azure-native:managedservices/v20190401preview:RegistrationDefinition" }, { type: "azure-native:managedservices/v20190601:RegistrationDefinition" }, { type: "azure-native:managedservices/v20190901:RegistrationDefinition" }, { type: "azure-native:managedservices/v20200201preview:RegistrationDefinition" }, { type: "azure-native:managedservices/v20220101preview:RegistrationDefinition" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RegistrationDefinition.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RegistrationDefinition resource.
 */
export interface RegistrationDefinitionArgs {
    /**
     * The details for the Managed Services offer’s plan in Azure Marketplace.
     */
    plan?: pulumi.Input<types.inputs.managedservices.v20221001.PlanArgs>;
    /**
     * The properties of a registration definition.
     */
    properties?: pulumi.Input<types.inputs.managedservices.v20221001.RegistrationDefinitionPropertiesArgs>;
    /**
     * The GUID of the registration definition.
     */
    registrationDefinitionId?: pulumi.Input<string>;
    /**
     * The scope of the resource.
     */
    scope: pulumi.Input<string>;
}
