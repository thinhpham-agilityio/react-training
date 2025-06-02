import { cn } from "@/lib/utils";
import StarSVG from "../icons/star";

interface StarRatingProps {
  rating: number;
  className?: string;
  rate?: boolean;
}

const StarRating = ({
  rating,
  className,
  rate = true,
}: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div
      className={cn(
        "my-3 flex items-center justify-start gap-2 md:my-3.5",
        className,
      )}
    >
      <div className={cn("flex gap-2")}>
        {/* FULL STARS */}
        {[...Array(fullStars)].map((_, index) => (
          <StarSVG key={`full-${index}`} className="fill-star" />
        ))}

        {/* HALF STAR */}
        {hasHalfStar && (
          <div className="relative">
            <StarSVG
              className="fill-star"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
            <StarSVG className="absolute left-0 top-0 fill-none stroke-star" />
          </div>
        )}

        {/* EMPTY STARS */}
        {[...Array(5 - Math.ceil(rating))].map((_, index) => (
          <StarSVG
            key={`empty-${index}`}
            className="fill-none stroke-star"
          />
        ))}
      </div>

      {/* RATING */}
      {rate && (
        <p className="text-primary">
          <span className="text-secondary">{rating}</span>/5
        </p>
      )}
    </div>
  );
};

export default StarRating;
