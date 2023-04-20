export const subCategories = (outfit) => {
    if (outfit.style == "Casual") {
        const cat1 = "Fit";
        const cat2 = "Approachability";
        const cat3 = "Style";
        return [cat1, cat2, cat3];
    } else if (outfit.style == "Formal") {
        const cat1 = "Fit";
        const cat2 = "Detailing";
        const cat3 = "Command";
        return [cat1, cat2, cat3];
    } else if (outfit.style == "Sexy") {
        const cat1 = "Fit";
        const cat2 = "Flattering";
        const cat3 = "Eye-Catching";
        return [cat1, cat2, cat3];
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

export default {averageRatings, subCategories}
