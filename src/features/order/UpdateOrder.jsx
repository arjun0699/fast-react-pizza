import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  /*USECASE: A special type of form , which doesn't do any navigation.*/
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  // request is used to get the data from the form.
  // but here in this use case we don't need that.
  // but a good option to use in any usecase.

  /*Explanation: after the submission the react router will RE-VALIDATE the page,
    i.e it will refetch the data after finding out that it has been changed.*/

  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrder;
