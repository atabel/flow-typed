// @flow

import pluralize from "pluralize";

(pluralize('word'): string);
pluralize('word', 0);
pluralize('word', 0, true);
pluralize.addIrregularRule('word', 'wordz');

// $FlowExpectedError
pluralize();
// $FlowExpectedError
pluralize.nope;
