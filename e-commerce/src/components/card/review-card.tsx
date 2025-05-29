import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StarRating from "../product/star-rating";
import GreenCheck from "../sgv/green-check";

interface ReviewCardProps {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  rating,
  comment,
  date,
  reviewerName,
  reviewerEmail,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="rounded-[1.25rem] bottom-px border-black/10">
      <CardHeader className="space-y-0 pb-4 pt-2">
        <StarRating rating={rating} rate={false} />

        <CardTitle className="flex items-center justify-start gap-2">
          <span>{reviewerName}</span>
          <GreenCheck />
        </CardTitle>
        <CardDescription>{reviewerEmail}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-black/60">&quot;{comment}&quot;</p>
      </CardContent>
      <CardFooter>
        <p className="text-base font-medium text-black/60">
          Posted on {formattedDate}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
