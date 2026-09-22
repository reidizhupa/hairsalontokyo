import type { FaqItem, RecruitContent, StaffMember } from "./types";

// Staff who appear at both roots locations (confirmed via each location's
// real Hot Pepper stylist page). Hot Pepper issues a separate stylist ID per
// store listing even for the same person, so each location's ID is recorded
// separately in profileIdByLocation.
export const STAFF: StaffMember[] = [
    {
        name: "やぎ あんじ",
        role: "代表 / スタイリスト",
        src: "/staff/yagi-anji.jpg",
        locations: ["asakusa", "sugamo"],
        profileIdByLocation: { asakusa: "T001096667", sugamo: "T000961200" },
    },
    {
        name: "村松 和哉",
        role: "代表 / スタイリスト",
        src: "/staff/muramatsu-kazuya.jpg",
        locations: ["asakusa", "sugamo"],
        profileIdByLocation: { asakusa: "T001096668", sugamo: "T000961666" },
    },
    {
        name: "澤本 芽衣",
        role: "スタイリスト",
        src: "/staff/sawamoto-mei.jpg",
        locations: ["asakusa", "sugamo"],
        profileIdByLocation: { asakusa: "T001096669", sugamo: "T001009532" },
    },
    {
        name: "TAIKI",
        role: "アシスタント",
        src: "/staff/taiki.jpg",
        locations: ["asakusa", "sugamo"],
    },
    {
        name: "松浦 茉潤",
        role: "アシスタント",
        src: "/staff/matsuura-mahiro.jpg",
        locations: ["asakusa", "sugamo"],
    },
    {
        name: "松家 はるか",
        role: "アシスタント",
        src: null,
        locations: ["asakusa", "sugamo"],
    },
    {
        name: "菅野 大樹",
        role: "アシスタント",
        src: null,
        locations: ["asakusa", "sugamo"],
    },
    {
        name: "カワシマ",
        role: "スタイリスト（メンズ限定）",
        src: "/staff/kawashima-yuuki.jpg",
        locations: ["sugamo"],
        profileIdByLocation: { sugamo: "T000966654" },
    },
    {
        name: "ひなた",
        role: "アシスタント",
        src: null,
        locations: ["sugamo"],
    },
];

export const FAQ: FaqItem[] = [
    {
        q: "初めての美容室は緊張します…。新規でも予約しても大丈夫？",
        a: "もちろん大丈夫です！rootsでは新規のお客様も大歓迎です。",
    },
    {
        q: "どのメニューにするか迷います…。どんなクーポンで予約すればいいの？",
        a: "メニューが決まっていなくても大丈夫です！rootsでは、ご希望や髪の状態をカウンセリングで確認し、最適なメニューをご提案します。「どのクーポンを選べばいいかわからない」という方も、まずは気になるクーポンでご予約ください。ご予約前のご質問は、お電話やInstagramのDMでもお気軽にどうぞ！",
    },
    {
        q: "髪色や髪型などどうしたいかが決まってなくても大丈夫ですか？",
        a: "もちろん大丈夫です！rootsでは「似合う髪型がわからない」「髪色はおまかせしたい」というお客様も多くご来店されています。",
    },
    {
        q: "美容室が苦手です…。",
        a: "美容室が苦手な方も、大丈夫です！「何を話せばいいかわからない」「希望をうまく伝えられない」という方も多くいらっしゃいます。無理に会話をする必要もありませんので、リラックスしてお過ごしください。",
    },
    {
        q: "スタイリング剤何使えばいい？",
        a: "スタイリング剤は何を使えばいいかわからなくても大丈夫です。髪質や長さ、なりたい仕上がりに合わせて、ワックス・オイル・バームなどから最適なものをご提案します。ご自宅で再現しやすい使い方までお伝えしますので、スタイリングが苦手な方もお気軽にご相談ください。お店で使っている商品もおすすめです。",
    },
];

export const RECRUIT: RecruitContent = {
    heading: ["共に育ち、長く働ける仲間を、", "募集しています。"],
    pitch: "「共に育つ」を大切に、仲間の成長を自分ごととして考えるチームです。教育カリキュラムのもと、2年以内のデビューを目指せる環境。アシスタントから店長・次世代リーダーへ、長期的なキャリアを描けます。",
    contactUrl: "https://www.instagram.com/roots_kawashimayuki/",
    contactName: "川島",
    contactHandle: "@roots_kawashimayuki",
    requirements: [
        { label: "職種", value: "美容師（スタイリスト・アシスタント）" },
        { label: "雇用形態", value: "正社員（試用期間6ヶ月）" },
        {
            label: "応募資格",
            value: "2027年度美容学校卒業見込み、美容師免許取得予定者",
        },
        {
            label: "勤務地",
            value: "roots 巣鴨本店／roots 浅草店／今後展開予定の各店舗（配属店舗はご希望を考慮のうえ決定）",
        },
        {
            label: "勤務時間",
            value: "9:30〜19:00（実働8時間・休憩1時間、早番・遅番あり）",
        },
        { label: "休日", value: "月8日休み（希望休2日）" },
        { label: "年間有給休暇", value: "勤続半年から10日付与" },
        {
            label: "休暇",
            value: "年末年始休暇5日／夏休み3日／慶弔休暇はその都度相談",
        },
        {
            label: "福利厚生",
            value: "社会保険完備／練習用ウィッグ無料支給／食事補助あり",
        },
    ],
    salary: [
        {
            role: "スタイリスト",
            base: "基本給 220,000円〜",
            items: [
                "歩合：〜50万円 10%／60万円 11%／以降10万円ごとに+1%",
                "通勤手当（上限10,000円）・昇給・役職手当あり",
                "セミナー等の臨時手当、専門学校等への外部講師同行手当あり",
            ],
        },
        {
            role: "アシスタント",
            base: "基本給 200,000円〜",
            items: [
                "通勤手当（上限10,000円）・昇給・役職手当あり",
                "セミナー等の臨時手当、専門学校等への外部講師同行手当あり",
            ],
        },
    ],
    steps: [
        {
            title: "応募",
            body: "履歴書をお店に郵送してください。フォーマットは問いませんが、Instagram IDまたはお電話番号をご記入ください。書類選考通過者のみ、採用担当からDMまたはお電話でご連絡いたします。",
        },
        {
            title: "面接",
            body: "書類選考通過後、日程を調整のうえ面接を行います。",
        },
        {
            title: "採用",
            body: "内定者のみ、採用担当からお電話でご連絡いたします。※お預かりした書類は返却いたしかねますので、あらかじめご了承ください。",
        },
    ],
    resumeAddress:
        "〒112-0011　東京都文京区千石4-26-2　SANSAN千石ビル　roots 採用担当者 宛",
};
