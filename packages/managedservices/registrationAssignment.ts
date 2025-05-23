import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The registration assignment.
 *
 * Uses Azure REST API version 2022-10-01. In version 2.x of the Azure Native provider, it used API version 2022-10-01.
 */
export class RegistrationAssignment extends pulumi.CustomResource {
    /**
     * Get an existing RegistrationAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegistrationAssignment {
        return new RegistrationAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managedservices:RegistrationAssignment';

    /**
     * Returns true if the given object is an instance of RegistrationAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RegistrationAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegistrationAssignment.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the registration assignment.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The properties of a registration assignment.
     */
    public readonly properties!: pulumi.Output<types.outputs.RegistrationAssignmentPropertiesResponse>;
    /**
     * The metadata for the registration assignment resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the Azure resource (Microsoft.ManagedServices/registrationAssignments).
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RegistrationAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistrationAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["registrationAssignmentId"] = args ? args.registrationAssignmentId : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managedservices/v20180601preview:RegistrationAssignment" }, { type: "azure-native:managedservices/v20190401preview:RegistrationAssignment" }, { type: "azure-native:managedservices/v20190601:RegistrationAssignment" }, { type: "azure-native:managedservices/v20190901:RegistrationAssignment" }, { type: "azure-native:managedservices/v20200201preview:RegistrationAssignment" }, { type: "azure-native:managedservices/v20220101preview:RegistrationAssignment" }, { type: "azure-native:managedservices/v20221001:RegistrationAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RegistrationAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RegistrationAssignment resource.
 */
export interface RegistrationAssignmentArgs {
    /**
     * The properties of a registration assignment.
     */
    properties?: pulumi.Input<types.inputs.RegistrationAssignmentPropertiesArgs>;
    /**
     * The GUID of the registration assignment.
     */
    registrationAssignmentId?: pulumi.Input<string>;
    /**
     * The scope of the resource.
     */
    scope: pulumi.Input<string>;
}