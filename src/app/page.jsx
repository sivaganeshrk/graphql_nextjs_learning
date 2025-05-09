import CreateOrEditAuthorModel from "@/components/author/model";
import BookCard from "@/components/book/card";
import CreateOrEditBookModelWrapper from "@/components/book/model_wrapper";
import DeleteConfirmationModel from "@/components/delete_confr_model";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <CreateOrEditBookModelWrapper refreshPageOnSuccess={true} book={{title:"Sample", description:"Sample Description", published_date:"2025-05-06", author_id:"456"}}/>
      <DeleteConfirmationModel/>
      <CreateOrEditAuthorModel/>
    </main>
  );
}
