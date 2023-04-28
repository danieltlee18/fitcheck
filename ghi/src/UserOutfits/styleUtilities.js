export const subCategories = (outfit) => {
    if (outfit.style == "Casual") {
        const cat1 = "Fit";
        const cat1_sub1 = "👖🤷‍♂️ Too Loose/Tight";
        const cat1_sub2 = "Just Right 👕😊";
        const cat2 = "Friendly";
        const cat2_sub1 = "😱🏃‍♂️ Intimidating";
        const cat2_sub2 = "Approachable 🤗👋";
        const cat3 = "Style";
        const cat3_sub1 = "😳🙈 YIKES";
        const cat3_sub2 = "Fashionista 👌😍";
        return [
            cat1,
            cat2,
            cat3,
            cat1_sub1,
            cat1_sub2,
            cat2_sub1,
            cat2_sub2,
            cat3_sub1,
            cat3_sub2,
        ];
    } else if (outfit.style == "Formal") {
        const cat1 = "Tailoring";
        const cat1_sub1 = "👖🤷‍♂️ Too Loose/Tight ";
        const cat1_sub2 = "Just Right 🤵😊";
        const cat2 = "Elegance";
        const cat2_sub1 = "🥴🧟‍♂️ Sloppy";
        const cat2_sub2 = "Fancy 💃🎩";
        const cat3 = "Style";
        const cat3_sub1 = "😳🙈 YIKES";
        const cat3_sub2 = "Fashionista 👌😍";
        return [
            cat1,
            cat2,
            cat3,
            cat1_sub1,
            cat1_sub2,
            cat2_sub1,
            cat2_sub2,
            cat3_sub1,
            cat3_sub2,
        ];
    } else if (outfit.style == "Sexy") {
        const cat1 = "Flattering";
        const cat1_sub1 = "👖🤷‍♂️ Too Loose/Tight";
        const cat1_sub2 = "Just Right 👕😊";
        const cat2 = "Seductive";
        const cat2_sub1 = "🤓🦆 Hi Friend";
        const cat2_sub2 = "Hey Big Head 👀🫦";
        const cat3 = "Style";
        const cat3_sub1 = "😳🙈 YIKES";
        const cat3_sub2 = "Fashionista 👌😍";
        return [
            cat1,
            cat2,
            cat3,
            cat1_sub1,
            cat1_sub2,
            cat2_sub1,
            cat2_sub2,
            cat3_sub1,
            cat3_sub2,
        ];
    }
};

export const averageRatings = (outfit) => {
    if (outfit.ratings.length == 0) {
        return [0, 0, 0];
    }
    let first = 0;
    let second = 0;
    let third = 0;
    for (let rating of outfit.ratings) {
        first += rating.category_1;
        second += rating.category_2;
        third += rating.category_3;
    }
    return [
        first / outfit.ratings.length,
        second / outfit.ratings.length,
        third / outfit.ratings.length,
    ];
};

export default { averageRatings, subCategories };
