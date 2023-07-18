import { findByProps, findByStoreName, findByName } from '@vendetta/metro';
import { constants, stylesheet, ReactNative } from '@vendetta/metro/common';
import { after, before } from '@vendetta/patcher';
import { storage } from '@vendetta/plugin';
import { findInReactTree } from '@vendetta/utils';
import { ArrayImplementations as ArrayOps } from './common';
import Settings from './components/Settings/Settings';
import { semanticColors } from '@vendetta/ui';

const UserProfile = findByProps("PRIMARY_INFO_TOP_OFFSET", "SECONDARY_INFO_TOP_MARGIN", "SIDE_PADDING");
const UserProfileName = findByName("UserProfileName")
const UserStore = findByStoreName("UserStore");
const { DCDChatManager } = ReactNative.NativeModules;

const styles = stylesheet.createThemedStyleSheet({
    opTagBackgroundColor: {
        color: semanticColors.HEADER_PRIMARY
    },
    opTagTextColor: {
        color: semanticColors.BACKGROUND_PRIMARY
    }
})

let unpatchGetUser;
let unpatchProfile;
let unpatchUpdateRows;

export default {
    onLoad: () => {
        

        unpatchUpdateRows = before("updateRows", DCDChatManager, args => {
            const rows = JSON.parse(args[1]);

            for ( const row of rows ) {
                if (row.type !== 1
                ) continue;

                /**
                 * @param {string} pronoun: The main pronoun in @plainText ~ This *should not be undefined*
                 */
                 const userId=row.message.authorId;
                const pronoun: string = UserStore.getUser(userId).pronouns;
                if (storage.isTimestamp && row.message.timestamp) {
                    row.message.timestamp += (" • " + pronoun);
                    continue;
                }

                if (row.message.opTagText) {
                    row.message.tagText = (
                        row.message.tagText 
                            ? row.message.tagText + " • " 
                            : ""
                        + row.message.opTagText)
                }

                row.message.opTagText = pronoun;
                row.message.opTagTextColor = ReactNative.processColor(styles.opTagTextColor.color);
                row.message.opTagBackgroundColor = ReactNative.processColor(styles.opTagBackgroundColor.color);
            }
    
            /**
             * Finally, re-stringify the row.
             */
            args[1] = JSON.stringify(rows);
        });
    },
 
    onUnload: () => {
        /**
         * Unpatch the main patches
         */
        unpatchGetUser?.();
        unpatchProfile?.();
        unpatchUpdateRows?.();
    },

    /**
     * Loads a settings menu
     */
    settings: Settings
};