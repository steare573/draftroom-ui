export const getLeagueByDraftId = (draftId) => (
  {
    type: 'GET_LEAGUE',
    toServer: {
      transport: 'socket',
      data: {
        draftId,
      },
      event: 'draft.getleague',
    },
  }
);
