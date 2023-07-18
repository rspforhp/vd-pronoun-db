(function(I,c,e,S,n,X,o,E,d,J){"use strict";var y={Failed:o.getAssetIDByName("Small"),Delete:o.getAssetIDByName("ic_message_delete"),Copy:o.getAssetIDByName("toast_copy_link"),Open:o.getAssetIDByName("ic_leave_stage"),Clipboard:o.getAssetIDByName("pending-alert"),Clock:o.getAssetIDByName("clock"),Pronoun:o.getAssetIDByName("ic_accessibility_24px"),Settings:{Toasts:{Settings:o.getAssetIDByName("ic_selection_checked_24px"),Failed:o.getAssetIDByName("ic_close_circle_24px")},Initial:o.getAssetIDByName("coffee"),Update:o.getAssetIDByName("discover"),Locale:o.getAssetIDByName("ic_locale_24px"),External:o.getAssetIDByName("ic_raised_hand_list"),Edit:o.getAssetIDByName("ic_edit_24px")}},R={shadow:(t=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:t,shadowRadius:4.65,elevation:8}),displayToast:(t,r)=>{e.toasts.open({content:r=="clipboard"?`Copied ${t} to clipboard.`:t,source:r=="clipboard"?y.Clipboard:y.Settings.Initial})}},v=(t,r,a,i,s)=>{try{return t(...r)}catch(p){console.warn(`[${a}] The following error happened when trying to ${i} ${s??"unspecificied label"}: ${p}`);return}};const O=(t,r,a,i)=>v(()=>{if(t){t.length++,a++;for(let s=t.length-1;s>=a;s--)t[s]=t[s-1];return t[a-1]=r,t.length}},[t,r,a],n.manifest.name,"insert an item at",i);var $={mapItem:(t,r,a)=>v(()=>{let i=[];for(let s=0;s<t.length;s++)O(i,r(t[s],s,t),i.length);return i},[t,r],n.manifest.name,"map an array at",a),insertItem:O},l={map:{},queue:[],fetching:!1,referenceMap:{hh:"he/him",hi:"he/it",hs:"he/she",ht:"he/they",ih:"it/him",ii:"it/its",is:"it/she",it:"it/they",shh:"she/he",sh:"she/her",si:"she/it",st:"she/they",th:"they/he",ti:"they/it",ts:"they/she",tt:"they/them",any:"any",other:"other",ask:"ask",avoid:"avoid, use name",unspecified:"unspecified"},async updateQueuedPronouns(){if(this.queue.length<=0||this.fetching)return;const t=this.queue.splice(0,49),r=s=>this.queue.length<=0?s:this.map[s]?r(this.queue.shift()):s;for(const s of t)this.map[s]&&(t[s]=r(s));this.fetching=!0;const a=await(await fetch(`https://pronoundb.org/api/v1/lookup-bulk?platform=discord&ids=${t.join(",")}`,{method:"GET",headers:{Accept:"application/json","X-PronounDB-Source":"Vendetta"}})).json(),i=Object.fromEntries(Object.entries(a).filter(([s,p])=>!isNaN(+s)));Object.assign(this.map,i),this.fetching=!1,this.queue.length>0&&this.updateQueuedPronouns()}},D={plugin:{source:"https://github.com/acquitelol/vd-pronoun-db",pronoundb:"https://pronoundb.org/"},author:{profile:{"Rosie<3":"https://github.com/acquitelol"}}};const{View:L,Text:U,TouchableOpacity:Z}=E.General,{useThemeContext:ee}=c.findByProps("useThemeContext"),{meta:{resolveSemanticColor:te}}=c.findByProps("colors","meta"),ae=c.findByName("UserProfileSection"),M=c.findByProps("triggerHaptic"),T=e.stylesheet.createThemedStyleSheet({container:{alignSelf:"flex-start",padding:1,borderRadius:9,width:"100%",marginTop:-4,marginRight:-12},innerContainer:{paddingHorizontal:6,paddingVertical:8,overflow:"hidden",flexDirection:"row",justifyContent:"center",alignItems:"center"},circle:{width:10,height:10,borderRadius:10/2,marginRight:6},fallback:{color:d.semanticColors.BACKGROUND_SECONDARY_ALT},text:{fontFamily:e.constants.Fonts.DISPLAY_NORMAL}});var re=({pronoun:t})=>{const r=ee(),a=te(r.theme,d.semanticColors.TEXT_NORMAL);return e.React.createElement(ae,{title:"Pronouns"},e.React.createElement(Z,{onPress:()=>{e.toasts.open({content:t,source:y.Pronoun}),M&&M.triggerHaptic()},style:n.storage.isRole?{justifyContent:"center",alignItems:"center"}:{}},n.storage.isRole?e.React.createElement(ProfileGradientCard,{style:T.container,fallbackBackground:T.fallback.color},e.React.createElement(L,{style:T.innerContainer},e.React.createElement(L,{style:[T.circle,{backgroundColor:a}]}),e.React.createElement(U,{style:[T.text,{color:a}]},"PronounDB: ",t))):e.React.createElement(U,{style:[T.text,{fontSize:16,color:a}]},"PronounDB: ",t)))};const{TouchableOpacity:C,View:A,Image:se,Text:B,Animated:P}=E.General,F=c.findByProps("transitionToGuild","openURL"),k=c.findByStoreName("UserStore"),ne=c.findByProps("showUserProfile"),g=e.stylesheet.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...R.shadow()},image:{width:75,height:75,borderRadius:10,...R.shadow()},mainText:{opacity:.975,letterSpacing:.25},header:{color:d.semanticColors.HEADER_PRIMARY,fontFamily:e.constants.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:d.semanticColors.HEADER_SECONDARY,fontSize:12.75}});var ie=({name:t,authors:r})=>{const a=e.React.useRef(new P.Value(1)).current,i=()=>P.spring(a,{toValue:1.1,duration:10,useNativeDriver:!0}).start(),s=()=>P.spring(a,{toValue:1,duration:250,useNativeDriver:!0}).start(),p=()=>ne.showUserProfile({userId:k.getCurrentUser().id}),b={transform:[{scale:a}]};return e.React.createElement(e.React.Fragment,null,e.React.createElement(A,{style:g.container},e.React.createElement(C,{onPress:p,onPressIn:i,onPressOut:s},e.React.createElement(P.View,{style:b},e.React.createElement(se,{style:[g.image],source:{uri:k?.getCurrentUser()?.getAvatarURL()?.replace("webp","png")}}))),e.React.createElement(A,{style:g.textContainer},e.React.createElement(C,{onPress:()=>F.openURL(D.plugin.source)},e.React.createElement(B,{style:[g.mainText,g.header]},t)),e.React.createElement(A,{style:{flexDirection:"row"}},e.React.createElement(B,{style:[g.mainText,g.subHeader]},"A project by"),$.mapItem(r,(f,m,x)=>e.React.createElement(C,{onPress:()=>F.openURL(D.author.profile[f.name]??"https://github.com/")},e.React.createElement(B,{style:[g.mainText,g.subHeader,{paddingLeft:4,fontFamily:e.constants.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},f.name,m<x.length-1?",":null)))))))};const{View:oe,Text:le}=E.General,Y=e.stylesheet.createThemedStyleSheet({text:{color:d.semanticColors.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:e.constants.Fonts.PRIMARY_BOLD,fontSize:12}});var _=({label:t,children:r})=>e.React.createElement(oe,{style:{marginTop:10}},e.React.createElement(le,{style:[Y.text,Y.optionText]},t.toUpperCase()),r);const{Image:G}=E.General,ce=e.ReactNative.Dimensions?.get("window").width;var V=({style:t,source:r})=>{const[a,i]=e.React.useState({width:0,height:0}),[s,p]=e.React.useState(0),b=()=>{const f=N=>typeof N=="string"?parseInt(N.replace("%",""))*ce/100:N,m=f(t.width);if(!t.maxWidth)return m;const x=f(t.maxWidth);return m>x?x:m};return e.React.useEffect(()=>{G.getSize(r,(f,m)=>{i({width:f,height:m})},f=>{console.error(`[${n.manifest.name}] ${f} when fetching ${r}`)}),p(b())},[]),e.React.createElement(G,{style:[...Array.isArray(t)?t:[t],{height:s*(a.height/a.width)}],source:{uri:r},resizeMode:"stretch"})};const{FormRow:u,FormSwitch:H,FormDivider:q}=E.Forms,{ScrollView:de,View:w,Text:he}=E.General,j=c.findByProps("transitionToGuild","openURL"),h=e.stylesheet.createThemedStyleSheet({icon:{color:d.semanticColors.INTERACTIVE_NORMAL},item:{color:d.semanticColors.TEXT_MUTED,fontFamily:e.constants.Fonts.PRIMARY_MEDIUM},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:d.semanticColors.BACKGROUND_MOBILE_SECONDARY,...R.shadow()},subheaderText:{color:d.semanticColors.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:e.constants.Fonts.PRIMARY_BOLD,fontSize:14},image:{width:"100%",maxWidth:350,borderRadius:10}});var pe=()=>{J.useProxy(n.storage);const[t,r]=e.React.useState(n.storage.isTimestamp),[a,i]=e.React.useState(n.storage.isRole);return e.React.createElement(de,null,e.React.createElement(ie,{name:n.manifest.name,authors:n.manifest.authors}),e.React.createElement(w,{style:{marginTop:20}},e.React.createElement(_,{label:"Preferences"},e.React.createElement(w,{style:[h.container]},e.React.createElement(u,{label:"Timestamps",subLabel:"Use Timestamps instead of OP Tag for the pronoun in the chat area.",onLongPress:()=>R.displayToast(`By default, ${n.manifest.name} will use the OP tag to display pronouns. Toggling this option will always use Timestamps instead of OP tag for pronouns.`,"tooltip"),leading:e.React.createElement(u.Icon,{style:h.icon,source:y.Settings.Locale}),trailing:e.React.createElement(H,{value:n.storage.isTimestamp,onValueChange:()=>{n.storage.isTimestamp=!n.storage.isTimestamp,r(n.storage.isTimestamp)}})}),e.React.createElement(q,null),e.React.createElement(u,{label:"Roles",subLabel:"Show the pronoun styled as a role instead of plain text inside of profiles.",onLongPress:()=>R.displayToast(`With this option enabled, ${n.manifest.name} will style pronouns as roles in profiles. Otherwise, it will style them as plain text.`,"tooltip"),leading:e.React.createElement(u.Icon,{style:h.icon,source:y.Settings.Edit}),trailing:e.React.createElement(H,{value:n.storage.isRole,onValueChange:()=>{n.storage.isRole=!n.storage.isRole,i(n.storage.isRole)}})}))),e.React.createElement(_,{label:"Previews"},e.React.createElement(w,{style:{...h.container,maxWidth:350}},e.React.createElement(V,{style:h.image,source:`https://cdn.discordapp.com/attachments/${t?"1011346757214543875/1075007230337896448/pronoun-timestamp.png":"1011346757214543875/1075007230107193374/pronoun-tag.png"}`})),e.React.createElement(w,{style:{...h.container,marginTop:10,maxWidth:350}},e.React.createElement(V,{style:h.image,source:`https://cdn.discordapp.com/attachments/${a?"1011346757214543875/1075007778399199282/profile-role.png":"1011346757214543875/1075007778067841044/profile-plain.png"}`}))),e.React.createElement(_,{label:"Source"},e.React.createElement(w,{style:h.container},e.React.createElement(u,{label:"Source",subLabel:`Open the repository of ${n.manifest.name} externally.`,onLongPress:()=>R.displayToast(`Opens the repository of ${n.manifest.name} on GitHub in an external page to view any source code of the plugin.`,"tooltip"),leading:e.React.createElement(u.Icon,{style:h.icon,source:y.Open}),trailing:()=>e.React.createElement(u.Arrow,null),onPress:()=>{j.openURL(D.plugin.source)}}),e.React.createElement(q,null),e.React.createElement(u,{label:"PronounDB",subLabel:`Open the ${n.manifest.name} website externally at \`https://pronoundb.org\`.`,onLongPress:()=>R.displayToast("Opens the PronounDB website in an external page which allows you to link your Discord account to PronounDB.","tooltip"),leading:e.React.createElement(u.Icon,{style:h.icon,source:y.Settings.External}),trailing:()=>e.React.createElement(u.Arrow,null),onPress:()=>{j.openURL(D.plugin.pronoundb)}})))),e.React.createElement(he,{style:h.subheaderText},`Build: (${n.manifest.hash.substring(0,8)})`))};const ue=c.findByProps("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING");c.findByName("UserProfileName");const ge=c.findByStoreName("UserStore"),{DCDChatManager:fe}=e.ReactNative.NativeModules,z=e.stylesheet.createThemedStyleSheet({opTagBackgroundColor:{color:d.semanticColors.HEADER_PRIMARY},opTagTextColor:{color:d.semanticColors.BACKGROUND_PRIMARY}});let W,K,Q;var ye={onLoad:()=>{W=S.before("getUser",ge,t=>{const r=t[0];l.map[r]||$.insertItem(l.queue,r,l.queue.length,"user id pronoun queue"),l.updateQueuedPronouns()}),K=S.after("type",ue.default,(t,r)=>{const a=X.findInReactTree(r,p=>p?.type?.displayName==="View"&&p?.props?.children.findIndex(b=>b?.type?.name==="UserProfileBio")!==-1)?.props?.children;if(!a)return r;const{userId:i}=a?.find(p=>typeof p?.props?.displayProfile?.userId=="string")?.props?.displayProfile??{};if(!i||!l.map[i]||l.referenceMap[l.map[i]]==="unspecified")return r;const s=l.referenceMap[l.map[i]];a.unshift(React.createElement(re,{pronoun:s}))}),Q=S.before("updateRows",fe,t=>{const r=JSON.parse(t[1]);for(const a of r){if(a.type!==1||!a?.message?.authorId||!l.map[a?.message?.authorId]||l.referenceMap[l.map[a?.message?.authorId]]==="unspecified")continue;const i=l.referenceMap[l.map[a.message.authorId]];if(n.storage.isTimestamp&&a.message.timestamp){a.message.timestamp+=" \u2022 "+i;continue}a.message.opTagText&&(a.message.tagText=a.message.tagText?a.message.tagText+" \u2022 ":""+a.message.opTagText),a.message.opTagText=i,a.message.opTagTextColor=e.ReactNative.processColor(z.opTagTextColor.color),a.message.opTagBackgroundColor=e.ReactNative.processColor(z.opTagBackgroundColor.color)}t[1]=JSON.stringify(r)})},onUnload:()=>{W?.(),K?.(),Q?.()},settings:pe};return I.default=ye,Object.defineProperty(I,"__esModule",{value:!0}),I})({},vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.plugin,vendetta.utils,vendetta.ui.assets,vendetta.ui.components,vendetta.ui,vendetta.storage);
