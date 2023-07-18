(function(b,h,e,V,r,f,k,i,d){"use strict";var y={Failed:i.getAssetIDByName("Small"),Delete:i.getAssetIDByName("ic_message_delete"),Copy:i.getAssetIDByName("toast_copy_link"),Open:i.getAssetIDByName("ic_leave_stage"),Clipboard:i.getAssetIDByName("pending-alert"),Clock:i.getAssetIDByName("clock"),Pronoun:i.getAssetIDByName("ic_accessibility_24px"),Settings:{Toasts:{Settings:i.getAssetIDByName("ic_selection_checked_24px"),Failed:i.getAssetIDByName("ic_close_circle_24px")},Initial:i.getAssetIDByName("coffee"),Update:i.getAssetIDByName("discover"),Locale:i.getAssetIDByName("ic_locale_24px"),External:i.getAssetIDByName("ic_raised_hand_list"),Edit:i.getAssetIDByName("ic_edit_24px")}},u={shadow:(t=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:t,shadowRadius:4.65,elevation:8}),displayToast:(t,s)=>{e.toasts.open({content:s=="clipboard"?`Copied ${t} to clipboard.`:t,source:s=="clipboard"?y.Clipboard:y.Settings.Initial})}},P=(t,s,a,l,n)=>{try{return t(...s)}catch(T){console.warn(`[${a}] The following error happened when trying to ${l} ${n??"unspecificied label"}: ${T}`);return}};const N=(t,s,a,l)=>P(()=>{if(t){t.length++,a++;for(let n=t.length-1;n>=a;n--)t[n]=t[n-1];return t[a-1]=s,t.length}},[t,s,a],r.manifest.name,"insert an item at",l);var H={mapItem:(t,s,a)=>P(()=>{let l=[];for(let n=0;n<t.length;n++)N(l,s(t[n],n,t),l.length);return l},[t,s],r.manifest.name,"map an array at",a),insertItem:N},m={plugin:{source:"https://github.com/acquitelol/vd-pronoun-db",pronoundb:"https://pronoundb.org/"},author:{profile:{"Rosie<3":"https://github.com/acquitelol"}}};const{TouchableOpacity:x,View:S,Image:W,Text:A,Animated:w}=f.General,v=h.findByProps("transitionToGuild","openURL"),B=h.findByStoreName("UserStore"),z=h.findByProps("showUserProfile"),g=e.stylesheet.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...u.shadow()},image:{width:75,height:75,borderRadius:10,...u.shadow()},mainText:{opacity:.975,letterSpacing:.25},header:{color:d.semanticColors.HEADER_PRIMARY,fontFamily:e.constants.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:d.semanticColors.HEADER_SECONDARY,fontSize:12.75}});var j=({name:t,authors:s})=>{const a=e.React.useRef(new w.Value(1)).current,l=()=>w.spring(a,{toValue:1.1,duration:10,useNativeDriver:!0}).start(),n=()=>w.spring(a,{toValue:1,duration:250,useNativeDriver:!0}).start(),T=()=>z.showUserProfile({userId:B.getCurrentUser().id}),_={transform:[{scale:a}]};return e.React.createElement(e.React.Fragment,null,e.React.createElement(S,{style:g.container},e.React.createElement(x,{onPress:T,onPressIn:l,onPressOut:n},e.React.createElement(w.View,{style:_},e.React.createElement(W,{style:[g.image],source:{uri:B?.getCurrentUser()?.getAvatarURL()?.replace("webp","png")}}))),e.React.createElement(S,{style:g.textContainer},e.React.createElement(x,{onPress:()=>v.openURL(m.plugin.source)},e.React.createElement(A,{style:[g.mainText,g.header]},t)),e.React.createElement(S,{style:{flexDirection:"row"}},e.React.createElement(A,{style:[g.mainText,g.subHeader]},"A project by"),H.mapItem(s,(p,R,D)=>e.React.createElement(x,{onPress:()=>v.openURL(m.author.profile[p.name]??"https://github.com/")},e.React.createElement(A,{style:[g.mainText,g.subHeader,{paddingLeft:4,fontFamily:e.constants.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},p.name,R<D.length-1?",":null)))))))};const{View:q,Text:J}=f.General,O=e.stylesheet.createThemedStyleSheet({text:{color:d.semanticColors.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:e.constants.Fonts.PRIMARY_BOLD,fontSize:12}});var I=({label:t,children:s})=>e.React.createElement(q,{style:{marginTop:10}},e.React.createElement(J,{style:[O.text,O.optionText]},t.toUpperCase()),s);const{Image:$}=f.General,K=e.ReactNative.Dimensions?.get("window").width;var L=({style:t,source:s})=>{const[a,l]=e.React.useState({width:0,height:0}),[n,T]=e.React.useState(0),_=()=>{const p=C=>typeof C=="string"?parseInt(C.replace("%",""))*K/100:C,R=p(t.width);if(!t.maxWidth)return R;const D=p(t.maxWidth);return R>D?D:R};return e.React.useEffect(()=>{$.getSize(s,(p,R)=>{l({width:p,height:R})},p=>{console.error(`[${r.manifest.name}] ${p} when fetching ${s}`)}),T(_())},[]),e.React.createElement($,{style:[...Array.isArray(t)?t:[t],{height:n*(a.height/a.width)}],source:{uri:s},resizeMode:"stretch"})};const{FormRow:c,FormSwitch:U,FormDivider:F}=f.Forms,{ScrollView:X,View:E,Text:Q}=f.General,M=h.findByProps("transitionToGuild","openURL"),o=e.stylesheet.createThemedStyleSheet({icon:{color:d.semanticColors.INTERACTIVE_NORMAL},item:{color:d.semanticColors.TEXT_MUTED,fontFamily:e.constants.Fonts.PRIMARY_MEDIUM},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:d.semanticColors.BACKGROUND_MOBILE_SECONDARY,...u.shadow()},subheaderText:{color:d.semanticColors.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:e.constants.Fonts.PRIMARY_BOLD,fontSize:14},image:{width:"100%",maxWidth:350,borderRadius:10}});var Z=()=>{k.useProxy(r.storage);const[t,s]=e.React.useState(r.storage.isTimestamp),[a,l]=e.React.useState(r.storage.isRole);return e.React.createElement(X,null,e.React.createElement(j,{name:r.manifest.name,authors:r.manifest.authors}),e.React.createElement(E,{style:{marginTop:20}},e.React.createElement(I,{label:"Preferences"},e.React.createElement(E,{style:[o.container]},e.React.createElement(c,{label:"Timestamps",subLabel:"Use Timestamps instead of OP Tag for the pronoun in the chat area.",onLongPress:()=>u.displayToast(`By default, ${r.manifest.name} will use the OP tag to display pronouns. Toggling this option will always use Timestamps instead of OP tag for pronouns.`,"tooltip"),leading:e.React.createElement(c.Icon,{style:o.icon,source:y.Settings.Locale}),trailing:e.React.createElement(U,{value:r.storage.isTimestamp,onValueChange:()=>{r.storage.isTimestamp=!r.storage.isTimestamp,s(r.storage.isTimestamp)}})}),e.React.createElement(F,null),e.React.createElement(c,{label:"Roles",subLabel:"Show the pronoun styled as a role instead of plain text inside of profiles.",onLongPress:()=>u.displayToast(`With this option enabled, ${r.manifest.name} will style pronouns as roles in profiles. Otherwise, it will style them as plain text.`,"tooltip"),leading:e.React.createElement(c.Icon,{style:o.icon,source:y.Settings.Edit}),trailing:e.React.createElement(U,{value:r.storage.isRole,onValueChange:()=>{r.storage.isRole=!r.storage.isRole,l(r.storage.isRole)}})}))),e.React.createElement(I,{label:"Previews"},e.React.createElement(E,{style:{...o.container,maxWidth:350}},e.React.createElement(L,{style:o.image,source:`https://cdn.discordapp.com/attachments/${t?"1011346757214543875/1075007230337896448/pronoun-timestamp.png":"1011346757214543875/1075007230107193374/pronoun-tag.png"}`})),e.React.createElement(E,{style:{...o.container,marginTop:10,maxWidth:350}},e.React.createElement(L,{style:o.image,source:`https://cdn.discordapp.com/attachments/${a?"1011346757214543875/1075007778399199282/profile-role.png":"1011346757214543875/1075007778067841044/profile-plain.png"}`}))),e.React.createElement(I,{label:"Source"},e.React.createElement(E,{style:o.container},e.React.createElement(c,{label:"Source",subLabel:`Open the repository of ${r.manifest.name} externally.`,onLongPress:()=>u.displayToast(`Opens the repository of ${r.manifest.name} on GitHub in an external page to view any source code of the plugin.`,"tooltip"),leading:e.React.createElement(c.Icon,{style:o.icon,source:y.Open}),trailing:()=>e.React.createElement(c.Arrow,null),onPress:()=>{M.openURL(m.plugin.source)}}),e.React.createElement(F,null),e.React.createElement(c,{label:"PronounDB",subLabel:`Open the ${r.manifest.name} website externally at \`https://pronoundb.org\`.`,onLongPress:()=>u.displayToast("Opens the PronounDB website in an external page which allows you to link your Discord account to PronounDB.","tooltip"),leading:e.React.createElement(c.Icon,{style:o.icon,source:y.Settings.External}),trailing:()=>e.React.createElement(c.Arrow,null),onPress:()=>{M.openURL(m.plugin.pronoundb)}})))),e.React.createElement(Q,{style:o.subheaderText},`Build: (${r.manifest.hash.substring(0,8)})`))};h.findByProps("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),h.findByName("UserProfileName"),h.findByStoreName("UserStore");const{DCDChatManager:ee}=e.ReactNative.NativeModules,Y=e.stylesheet.createThemedStyleSheet({opTagBackgroundColor:{color:d.semanticColors.HEADER_PRIMARY},opTagTextColor:{color:d.semanticColors.BACKGROUND_PRIMARY}});let G;var te={onLoad:()=>{G=V.before("updateRows",ee,t=>{const s=JSON.parse(t[1]);for(const a of s)if(a.type===1){if(string=a.message.username,r.storage.isTimestamp&&a.message.timestamp){a.message.timestamp+=" \u2022 "+pronoun;continue}a.message.opTagText&&(a.message.tagText=a.message.tagText?a.message.tagText+" \u2022 ":""+a.message.opTagText),a.message.opTagText=pronoun,a.message.opTagTextColor=e.ReactNative.processColor(Y.opTagTextColor.color),a.message.opTagBackgroundColor=e.ReactNative.processColor(Y.opTagBackgroundColor.color)}t[1]=JSON.stringify(s)})},onUnload:()=>{G?.()},settings:Z};return b.default=te,Object.defineProperty(b,"__esModule",{value:!0}),b})({},vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.plugin,vendetta.ui.components,vendetta.storage,vendetta.ui.assets,vendetta.ui);
