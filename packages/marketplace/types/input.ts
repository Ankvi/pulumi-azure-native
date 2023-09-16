import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace marketplace {
    export interface PlanArgs {
        /**
         * Plan accessibility
         */
        accessibility?: pulumi.Input<string | enums.Accessibility>;
    }

    export namespace v20200101 {
        export interface PlanArgs {
            /**
             * Plan accessibility
             */
            accessibility?: pulumi.Input<string | enums.v20200101.Accessibility>;
        }

    }

    export namespace v20211201 {
    }

    export namespace v20220301 {
    }

    export namespace v20220901 {
    }

    export namespace v20230101 {
        export interface PlanArgs {
            /**
             * Plan accessibility
             */
            accessibility?: pulumi.Input<string | enums.v20230101.Accessibility>;
        }

    }
}
